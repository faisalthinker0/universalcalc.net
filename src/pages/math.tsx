import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { calculatorCategories } from "@/lib/calculatorTypes";
import SEO from "@/components/SEO";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import * as Icons from "lucide-react";

export default function MathPage() {
  // Scroll to top when page loads
  useScrollToTop();

  const mathCategory = calculatorCategories.find((cat) => cat.id === "math");

  if (!mathCategory) return null;

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? (
      <IconComponent className="h-6 w-6" />
    ) : (
      <Icons.Calculator className="h-6 w-6" />
    );
  };

  return (
    <>
      <SEO
        title="Math Calculators - Scientific, Percentage, Fractions & More | UniversalCalc"
        description="Powerful math calculators including scientific, percentage, fraction, geometry, and statistics tools. Free and easy to use."
        canonical="https://universalcalc.net/math"
        keywords="math calculator, scientific calculator, percentage calculator, fraction calculator, geometry calculator, statistics calculator"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Math Calculators",
          description:
            "Powerful math calculators including scientific, percentage, fraction, geometry, and statistics tools",
          url: "https://universalcalc.net/math",
        }}
        breadcrumbs={[
          { name: "Home", url: "https://universalcalc.net" },
          { name: "Math Calculators", url: "https://universalcalc.net/math" },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mr-4 shadow-lg">
              <Icons.Calculator className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {mathCategory?.name}
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {mathCategory?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mathCategory.calculators.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/calculator/${calculator.id}`}
              className="group"
            >
              <Card className="hover-lift border-0 shadow-xl bg-gradient-to-br from-card to-primary/5 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors duration-200">
                      {getIcon(calculator.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {calculator.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {calculator.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium">
                    <span>Try Calculator</span>
                    <Icons.ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
