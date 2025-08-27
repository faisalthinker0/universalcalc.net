import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { featuredCalculators } from "@/lib/calculatorTypes";
import Calculator from "@/components/Calculator";
import SEO from "@/components/SEO";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import * as Icons from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top when page loads
  useScrollToTop();

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? (
      <IconComponent className="h-5 w-5" />
    ) : (
      <Icons.Calculator className="h-5 w-5" />
    );
  };

  const filteredCalculators = featuredCalculators.filter((calc) =>
    calc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Online Calculator - Math, Financial, Health Tools"
        description="Use our free online calculators for math, finance, health, and more. Scientific calculator, mortgage calculator, BMI calculator and dozens more."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "UniversalCalc",
          description:
            "Free online calculators for math, finance, health, and more",
          url: "https://universalcalc.net",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://universalcalc.net/?search={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }}
        breadcrumbs={[{ name: "Home", url: "https://universalcalc.net" }]}
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Free Calculator
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Simple, fast, and reliable calculators for all your needs
          </p>

          {/* Main Calculator */}
          <div className="mb-12">
            <Calculator />
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Icons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search more calculators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Popular Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCalculators.slice(0, 6).map((calculator) => (
              <Link key={calculator.id} href={`/calculator/${calculator.id}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        {getIcon(calculator.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {calculator.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {calculator.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/math">
              <Button size="lg" className="px-8 py-4 text-lg rounded-full">
                View All Calculators
                <Icons.ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
