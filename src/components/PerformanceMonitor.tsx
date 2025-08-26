
import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      }).observe({ entryTypes: ['first-input'] });
    };

    // Track custom metrics
    const trackCustomMetrics = () => {
      // Time to Interactive
      const tti = performance.now();
      console.log('Time to Interactive:', tti);

      // Resource loading times
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('DNS Lookup:', navigation.domainLookupEnd - navigation.domainLookupStart);
        console.log('TCP Connect:', navigation.connectEnd - navigation.connectStart);
        console.log('Request/Response:', navigation.responseEnd - navigation.requestStart);
        console.log('DOM Processing:', navigation.domContentLoadedEventEnd - navigation.responseEnd);
      }
    };

    // Initialize tracking
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      trackWebVitals();
      trackCustomMetrics();
    }

    // Track user engagement
    let startTime = Date.now();
    const trackEngagement = () => {
      const timeOnPage = Date.now() - startTime;
      console.log('Time on page:', timeOnPage);
    };

    window.addEventListener('beforeunload', trackEngagement);

    return () => {
      window.removeEventListener('beforeunload', trackEngagement);
    };
  }, []);

  return null;
}

// Helper function to report performance metrics
export const reportWebVitals = (metric: PerformanceMetrics) => {
  // In production, send to analytics service
  if (process.env.NODE_ENV === 'production') {
    // Example: Google Analytics 4
    // gtag('event', 'web_vitals', {
    //   metric_name: metric.name,
    //   metric_value: metric.value,
    //   metric_id: metric.id
    // });
    
    console.log('Performance metric:', metric);
  }
};
