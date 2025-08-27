# UniversalCalc - Free Online Calculator Platform

A comprehensive collection of free online calculators for finance, health, math, and everyday calculations. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **50+ Free Calculators** across multiple categories
- **Mobile-First Design** with responsive layouts
- **Dark/Light Theme** support
- **SEO Optimized** with structured data
- **Fast Performance** with local calculations
- **Professional UI/UX** with modern design patterns

## 📱 Mobile Experience Improvements

### Issue Fixed: Calculator Navigation on Mobile

**Problem**: When clicking calculator links in the footer on mobile, the page would render but not scroll to the top, making users unable to see the calculator content.

**Solution**:

- Added `useEffect` hook in `src/pages/calculator/[type].tsx` (lines 25-28)
- Created reusable `useScrollToTop` hook in `src/hooks/use-scroll-to-top.ts`
- Applied consistent scroll-to-top behavior across all pages

**Files Modified**:

- `src/pages/calculator/[type].tsx` - Added scroll-to-top on calculator type change
- `src/hooks/use-scroll-to-top.ts` - Created reusable hook
- All page components - Applied consistent navigation behavior

## 🔗 Support Pages Implementation

### Issue Fixed: Broken Footer Links

**Problem**: Footer had support links pointing to `#help`, `#contact`, etc., which were broken anchor links.

**Solution**: Created comprehensive support pages and updated routing.

**New Pages Created**:

1. **Help Center** (`/help`) - `src/pages/help.tsx`

   - FAQ section with common questions
   - Getting started guides
   - Mobile optimization tips
   - Troubleshooting information

2. **Contact Us** (`/contact`) - `src/pages/contact.tsx`

   - Contact form with validation
   - Support information
   - Office hours
   - FAQ section

3. **Privacy Policy** (`/privacy`) - `src/pages/privacy.tsx`

   - Comprehensive privacy information
   - Data collection practices
   - User rights and choices
   - Security measures

4. **Terms of Service** (`/terms`) - `src/pages/terms.tsx`
   - Complete legal terms
   - User responsibilities
   - Service limitations
   - Intellectual property rights

**Files Modified**:

- `src/App.tsx` - Added support page routes
- `src/components/Footer.tsx` - Updated links to actual pages
- All support pages - Added proper SEO and structured data

## 🎨 UI/UX Improvements

### Mobile Heading Sizes

**Problem**: Headings were too large on mobile devices, affecting readability.

**Solution**: Implemented responsive typography with proper breakpoints.

**Changes Made**:

- **Main Headings**: `text-3xl sm:text-4xl md:text-5xl`
- **Sub Headings**: `text-xl sm:text-2xl`
- **Body Text**: `text-base sm:text-lg md:text-xl`
- **Card Padding**: `p-4 sm:p-8`

**Files Modified**:

- `src/pages/calculator/[type].tsx` - Responsive calculator page headings
- `src/pages/home.tsx` - Home page typography
- `src/pages/financial.tsx` - Financial page layout
- `src/pages/health.tsx` - Health page layout
- `src/pages/math.tsx` - Math page layout
- `src/pages/other.tsx` - Other tools page layout
- All support pages - Consistent responsive design

### Navbar Styling

**Problem**: Navbar had border issues and lacked visual appeal.

**Solution**: Complete navbar redesign with modern styling.

**Improvements**:

- **Active State Indicators**: Visual feedback for current page
- **Hover Effects**: Smooth transitions and hover states
- **Gradient Logo**: Beautiful gradient branding
- **Better Spacing**: Improved navigation item spacing
- **Mobile Menu**: Enhanced mobile navigation experience

**Files Modified**:

- `src/components/Header.tsx` - Complete navbar redesign

## 🧮 Calculator Functionality

### "Coming Soon" Calculators Completed

**Problem**: Several calculators showed "coming soon" message without functionality.

**Solution**: Implemented full functionality for all calculator types.

**Calculators Added**:

1. **Scientific Calculator** (`/calculator/scientific`)

   - Basic expression evaluation
   - Error handling for invalid expressions

2. **Fraction Calculator** (`/calculator/fraction`)

   - Add, subtract, multiply, divide operations
   - Numerator/denominator inputs
   - Operation selection

3. **Triangle Calculator** (`/calculator/triangle`)

   - Area calculation using Heron's formula
   - Perimeter calculation
   - Three-side input system

4. **Random Number Generator** (`/calculator/random`)

   - Custom range selection
   - Multiple number generation
   - Count control (up to 100 numbers)

5. **Unit Converter** (`/calculator/conversion`)
   - Length conversions (meters/feet)
   - Temperature conversions (celsius/fahrenheit)
   - Extensible conversion system

**Files Modified**:

- `src/pages/calculator/[type].tsx` - Added calculation logic and input fields

## 🔍 SEO Implementation

### Structured Data & Meta Information

**Problem**: Pages lacked proper SEO optimization and structured data.

**Solution**: Comprehensive SEO implementation across all pages.

**SEO Features Added**:

- **JSON-LD Schema Markup**: Structured data for search engines
- **Meta Tags**: Comprehensive meta information
- **Canonical URLs**: Proper URL canonicalization
- **Keywords**: Relevant keyword optimization
- **Breadcrumbs**: Navigation structure for SEO

**Schema Types Implemented**:

- **Home Page**: `WebSite` schema with search action
- **Category Pages**: `CollectionPage` schema with calculator listings
- **Calculator Pages**: `SoftwareApplication` schema
- **Support Pages**: `FAQPage`, `ContactPage`, `WebPage` schemas
- **Breadcrumbs**: `BreadcrumbList` schema

**Files Modified**:

- All page components - Added structured data
- `src/components/SEO.tsx` - Enhanced SEO component

## 📁 File Structure & Implementation

### Core Components

```
src/
├── components/
│   ├── Header.tsx              # Navigation bar with responsive design
│   ├── Footer.tsx              # Footer with working support links
│   ├── Calculator.tsx          # Main calculator component
│   ├── CalculatorGrid.tsx      # Calculator grid layout
│   └── SEO.tsx                 # SEO component with structured data
├── hooks/
│   └── use-scroll-to-top.ts    # Custom hook for navigation
├── pages/
│   ├── calculator/
│   │   └── [type].tsx         # Dynamic calculator pages
│   ├── home.tsx                # Home page with featured calculators
│   ├── financial.tsx           # Financial calculators category
│   ├── health.tsx              # Health calculators category
│   ├── math.tsx                # Math calculators category
│   ├── other.tsx               # Other tools category
│   ├── help.tsx                # Help center page
│   ├── contact.tsx             # Contact page
│   ├── privacy.tsx             # Privacy policy page
│   └── terms.tsx               # Terms of service page
└── lib/
    ├── calculatorTypes.ts      # Calculator type definitions
    └── calculatorLogic.ts      # Calculation algorithms
```

### Key Implementation Details

#### 1. Mobile Navigation Fix

```typescript
// src/pages/calculator/[type].tsx
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [calculatorType]);
```

#### 2. Responsive Typography

```typescript
// Responsive heading classes
className = "text-3xl sm:text-4xl md:text-5xl font-bold";
className = "text-base sm:text-lg md:text-xl";
```

#### 3. Structured Data

```typescript
// Example: Calculator page schema
structuredData={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": calculator.name,
  "description": calculator.description,
  "applicationCategory": "Calculator",
  "operatingSystem": "Web Browser"
}}
```

#### 4. Navbar Active States

```typescript
// Active page detection
const [location] = useLocation();
const isActive = (path: string) => location === path;
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd universalcalc.net

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create a `.env.local` file:

```env
VITE_APP_URL=https://universalcalc.net
VITE_APP_NAME=UniversalCalc
```

## 🎯 Key Features Implemented

1. **Mobile-First Design**: Responsive layouts for all screen sizes
2. **Navigation Enhancement**: Smooth scrolling and active state indicators
3. **Complete Calculator Suite**: 50+ fully functional calculators
4. **Professional Support System**: Help center, contact, legal pages
5. **SEO Optimization**: Structured data and meta information
6. **Performance**: Local calculations with no server dependencies
7. **Accessibility**: Proper ARIA labels and semantic HTML
8. **Theme Support**: Dark/light mode with system preference detection

## 🔧 Technical Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Routing**: Wouter (lightweight router)
- **State Management**: React Hooks
- **Build Tool**: Vite
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **SEO**: Custom SEO component with structured data

## 📱 Mobile Optimization

- Responsive typography scaling
- Touch-friendly button sizes
- Mobile-optimized navigation
- Smooth scrolling behavior
- Optimized card layouts
- Mobile-first design approach

## 🔍 SEO Features

- JSON-LD structured data
- Meta tag optimization
- Canonical URLs
- Breadcrumb navigation
- Open Graph tags
- Twitter Card support
- Schema.org markup

## 🎨 Design System

- **Color Palette**: Primary, accent, and neutral colors
- **Typography**: Responsive font scaling
- **Spacing**: Consistent spacing system
- **Shadows**: Subtle depth and elevation
- **Transitions**: Smooth animations and hover effects
- **Components**: Reusable UI components

## 🚀 Performance Features

- Local calculations (no server calls)
- Lazy loading for images
- Optimized bundle size
- Efficient re-renders
- Memory leak prevention
- Performance monitoring

## 🔒 Security & Privacy

- No data collection
- Local processing only
- Secure HTTPS
- Privacy-focused design
- GDPR compliance ready
- No tracking scripts

## 📈 Future Enhancements

- User accounts and history
- Advanced calculator features
- API integrations
- Mobile app versions
- Multi-language support
- Advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

- **Help Center**: `/help`
- **Contact**: `/contact`
- **Email**: support@universalcalc.net

---

**UniversalCalc** - Professional calculators for everyone, built with modern web technologies and a focus on user experience.
