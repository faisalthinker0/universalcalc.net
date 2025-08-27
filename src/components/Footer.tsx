import { Link } from "wouter";
import { Calculator } from "lucide-react";

export default function Footer() {
  const popularCalculators = [
    { href: "/calculator/mortgage", label: "Mortgage Calculator" },
    { href: "/calculator/bmi", label: "BMI Calculator" },
    { href: "/calculator/loan", label: "Loan Calculator" },
    { href: "/calculator/calorie", label: "Calorie Calculator" },
  ];

  const categories = [
    { href: "/financial", label: "Financial" },
    { href: "/health", label: "Health & Fitness" },
    { href: "/math", label: "Math" },
    { href: "/other", label: "Other Tools" },
  ];

  const support = [
    { href: "/help", label: "Help Center" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Calculator className="text-primary text-xl mr-2" />
              <span className="text-lg font-semibold">UniversalCalc</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The world's most comprehensive collection of free online
              calculators for finance, health, math, science, and everyday
              calculations.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Popular Calculators</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {popularCalculators.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                    data-testid={`footer-calculator-${item.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Categories</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                    data-testid={`footer-category-${item.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {support.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                    data-testid={`footer-support-${item.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 UniversalCalc.net. All rights reserved. | Professional
            calculators for everyone
          </p>
        </div>
      </div>
    </footer>
  );
}
