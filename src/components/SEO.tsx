import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  alternateLanguages?: Array<{ lang: string; url: string }>;
  noIndex?: boolean;
  priority?: number;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export default function SEO({
  title = "UniversalCalc - Free Online Calculators for Every Need",
  description = "Comprehensive collection of free online calculators including financial, health, scientific, math, and specialty calculators. Fast, accurate, and mobile-friendly calculations.",
  keywords = "calculator, online calculator, financial calculator, scientific calculator, mortgage calculator, BMI calculator, math calculator, free calculator tools",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://universalcalc.net/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  breadcrumbs,
  alternateLanguages,
  noIndex = false,
  priority = 0.8,
  changeFreq = 'weekly'
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Function to set or update meta tags
    const setMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Set canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Basic meta tags
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    setMeta('author', 'UniversalCalc Team');
    setMeta('generator', 'UniversalCalc Calculator Platform');
    setMeta('rating', 'general');
    setMeta('distribution', 'global');
    setMeta('language', 'en');
    setMeta('revisit-after', '7 days');
    
    // Enhanced mobile and PWA meta tags
    setMeta('mobile-web-app-capable', 'yes');
    setMeta('apple-mobile-web-app-capable', 'yes');
    setMeta('apple-mobile-web-app-status-bar-style', 'default');
    setMeta('apple-mobile-web-app-title', 'UniversalCalc');
    setMeta('format-detection', 'telephone=no');
    
    // Security and privacy
    setMeta('referrer', 'strict-origin-when-cross-origin');
    
    // Performance hints
    setMeta('dns-prefetch-control', 'on');
    
    // Search engine specific
    setMeta('google', 'notranslate');
    setMeta('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('bingbot', 'index, follow');
    setMeta('slurp', 'index, follow');

    // Open Graph tags
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', 'UniversalCalc', true);
    setMeta('og:locale', 'en_US', true);

    if (canonical) {
      setMeta('og:url', canonical, true);
    }

    // Twitter Card tags
    setMeta('twitter:card', twitterCard);
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    setMeta('twitter:image', ogImage);
    setMeta('twitter:site', '@UniversalCalc');
    setMeta('twitter:creator', '@UniversalCalc');

    // Additional SEO meta tags
    setMeta('application-name', 'UniversalCalc');
    setMeta('msapplication-TileColor', '#3b82f6');
    setMeta('theme-color', '#3b82f6');

    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Language and alternate languages
    document.documentElement.lang = 'en';
    
    // Handle alternate languages
    if (alternateLanguages) {
      alternateLanguages.forEach(({ lang, url }) => {
        let link = document.querySelector(`link[hreflang="${lang}"]`) as HTMLLinkElement;
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'alternate');
          link.setAttribute('hreflang', lang);
          document.head.appendChild(link);
        }
        link.setAttribute('href', url);
      });
    }
    
    // Breadcrumb structured data
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };
      
      let breadcrumbScript = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-breadcrumb', 'true');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    }
    
    // Preconnect to external domains for performance
    const preconnectDomains = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
    preconnectDomains.forEach(domain => {
      let link = document.querySelector(`link[rel="preconnect"][href="${domain}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'preconnect');
        link.setAttribute('href', domain);
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard, structuredData, breadcrumbs, alternateLanguages, noIndex]);

  return null;
}

// Helper function to generate structured data for calculators
export const generateCalculatorStructuredData = (calculatorName: string, description: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": calculatorName,
    "description": description,
    "url": url,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UniversalCalc",
      "url": "https://universalcalc.net"
    }
  };
};

// Helper function to generate website structured data
export const generateWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UniversalCalc",
    "url": "https://universalcalc.net",
    "description": "Comprehensive collection of free online calculators for finance, health, science, math, and everyday calculations",
    "publisher": {
      "@type": "Organization",
      "name": "UniversalCalc",
      "url": "https://universalcalc.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://universalcalc.net/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://universalcalc.net/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};