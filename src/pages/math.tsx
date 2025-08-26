import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { calculatorCategories } from "@/lib/calculatorTypes";
import SEO from "@/components/SEO";
import * as Icons from "lucide-react";

export default function Math() {
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
        title="Math Calculators - Scientific, Geometry & Statistics Tools | UniversalCalc"
        description="Advanced mathematical calculators including scientific calculator, fraction calculator, percentage calculator, geometry tools, and statistical calculators."
        canonical="https://universalcalc.net/math"
        keywords="math calculator, scientific calculator, geometry calculator, statistics calculator, fraction calculator, percentage calculator, mathematical tools"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-shadow">
            Math Calculators
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced mathematical tools for scientific calculations, geometry
            problems, statistical analysis, and comprehensive number operations.
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
