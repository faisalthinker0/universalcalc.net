import { Link } from "wouter";
import { Calculator, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-2 bg-primary rounded-lg">
              <Calculator className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Calculator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/math"
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
            >
              Math
            </Link>
            <Link
              href="/financial"
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
            >
              Financial
            </Link>
            <Link
              href="/health"
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
            >
              Health
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background rounded-b-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-accent"
              >
                Home
              </Link>
              <Link
                href="/math"
                className="text-muted-foreground hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-accent"
              >
                Math
              </Link>
              <Link
                href="/financial"
                className="text-muted-foreground hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-accent"
              >
                Financial
              </Link>
              <Link
                href="/health"
                className="text-muted-foreground hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-accent"
              >
                Health
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
