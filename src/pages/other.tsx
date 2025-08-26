import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { calculatorCategories } from "@/lib/calculatorTypes";
import SEO from "@/components/SEO";
import * as Icons from "lucide-react";

export default function Other() {
  const otherCategory = calculatorCategories.find((cat) => cat.id === "other");

  if (!otherCategory) return null;

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? (
      <IconComponent className="h-6 w-6" />
    ) : (
      <Icons.Wrench className="h-6 w-6" />
    );
  };

  return (
    <>
      <SEO
        title="Utility Calculators - Age, Date, Time & Academic Tools | UniversalCalc"
        description="Useful utility calculators for age calculation, date operations, time calculations, GPA calculator, password generator, and unit conversions."
        canonical="https://universalcalc.net/other"
        keywords="utility calculator, age calculator, date calculator, time calculator, GPA calculator, password generator, unit converter, everyday calculators"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-shadow">
            Utility Calculators
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Essential utility tools for age calculation, date/time operations,
            academic grading, password generation, and various everyday
            calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCategory.calculators.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/calculator/${calculator.id}`}
              className="group"
            >
              <Card className="hover-lift border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl mr-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-200">
                      {getIcon(calculator.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                      {calculator.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {calculator.description}
                  </p>
                  <div className="mt-6 flex items-center text-gray-700 dark:text-gray-400 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-200">
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
