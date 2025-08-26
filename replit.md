# UniversalCalc - Professional Calculator Platform

## Overview

UniversalCalc is a comprehensive online calculator platform designed for universalcalc.net, providing professional-grade calculation tools across financial, health, mathematical, and utility categories. The application features a modern, responsive design with enhanced UI/UX, comprehensive SEO optimization, dark mode support, and a scientific calculator as the primary interface. Built as a pure frontend-only React application with no backend dependencies - completely independent and ready for static hosting deployment.

## User Preferences

Preferred communication style: Simple, everyday language.
Domain: universalcalc.net
Focus: UI/UX enhancement and SEO optimization for top search rankings
No backend required - pure React.js implementation

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite development server (100% frontend-only)
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming, custom animations and effects
- **State Management**: Local React state for UI components (no external APIs needed)
- **Calculator Logic**: Custom TypeScript classes for client-side calculations
- **Theme System**: Dark/Light mode support with system preference detection
- **SEO**: Comprehensive SEO optimization with structured data, meta tags, and social sharing
- **Independence**: No server, database, or backend dependencies - runs entirely in browser

### SEO and Performance Optimization
- **Meta Tags**: Comprehensive meta tag implementation for all pages
- **Structured Data**: JSON-LD structured data for calculators and website
- **Open Graph**: Full Open Graph and Twitter Card support
- **Sitemap**: XML sitemap with all calculator pages
- **Robots.txt**: Search engine optimization directives
- **PWA**: Progressive Web App manifest for mobile experience
- **Performance**: Optimized fonts, preloading, and efficient asset management

### Domain and Branding
- **Domain**: universalcalc.net
- **Brand**: UniversalCalc - Professional calculator platform
- **Target**: Top search engine rankings for calculator-related keywords
- **Focus**: User experience and search engine optimization

### Component Structure
- **Layout**: Header with search, main content area, and footer
- **Calculator Types**: Organized by categories (financial, health, math, other)
- **Reusable Components**: Card-based layouts for calculator displays
- **Icon System**: Lucide React icons with dynamic icon loading
- **Responsive Design**: Mobile-first approach with responsive grid layouts

## External Dependencies

### Frontend-Only Configuration
- **No Database Required**: All calculations performed client-side
- **Static Hosting Ready**: Can be deployed to any static hosting service
- **No Backend Dependencies**: Pure React.js application

### UI and Styling
- **Radix UI**: Comprehensive set of accessible React components
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Inter font family for typography
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

### State Management and HTTP
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation for forms and API data
- **Date-fns**: Date manipulation utilities

### Component Libraries
- **React Router**: Handled by Wouter for lightweight routing
- **Embla Carousel**: Carousel component implementation
- **Class Variance Authority**: Utility for component variant management
- **CLSX**: Conditional className utility

The architecture follows a frontend-only structure using pure React.js with Vite as the development server, enabling efficient development and deployment of a feature-rich calculator application without any backend dependencies. All calculations are performed client-side using TypeScript logic.