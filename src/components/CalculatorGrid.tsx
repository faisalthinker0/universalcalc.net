import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { calculatorCategories, type CalculatorCategory } from '@/lib/calculatorTypes';
import * as Icons from 'lucide-react';

interface CalculatorGridProps {
  searchQuery?: string;
}

export default function CalculatorGrid({ searchQuery = '' }: CalculatorGridProps) {
  const filteredCategories = calculatorCategories.map(category => ({
    ...category,
    calculators: category.calculators.filter(calc =>
      calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.calculators.length > 0);

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : <Icons.Calculator className="h-5 w-5" />;
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        {searchQuery ? `Search Results for "${searchQuery}"` : 'Free Online Calculators'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredCategories.map((category, index) => (
          <Card
            key={category.id}
            className="hover-lift border-0 shadow-lg gradient-bg-primary animate-fade-in-scale group focus-ring"
            style={{ animationDelay: `${index * 50}ms` }}
            tabIndex={0}
            role="button"
            aria-label={`Open ${category.name} calculator`}
          >
            <div className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                data-testid={`category-image-${category.id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary mr-4 micro-bounce group-hover:bg-primary/20 transition-colors duration-300">
                  {getIcon(category.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {category.calculators.slice(0, 4).map((calc) => (
                  <Link
                    key={calc.id}
                    href={`/calculator/${calc.id}`}
                    className="block text-primary hover:text-primary-dark text-sm flex items-center transition-colors duration-200 py-1 px-2 rounded hover:bg-primary/10"
                    data-testid={`calculator-link-${calc.id}`}
                  >
                    <span className="mr-2 text-primary">•</span>
                    {calc.name}
                  </Link>
                ))}
                {category.calculators.length > 4 && (
                  <div className="text-gray-500 text-xs mt-2 italic">
                    +{category.calculators.length - 4} more calculators
                  </div>
                )}
              </div>
              <div className="mt-4">
                <Link
                  href={`/${category.id}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200"
                  data-testid={`view-all-${category.id}`}
                >
                  View All →
                </Link>
              </div>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full w-full"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {searchQuery && filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <Icons.Search className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No calculators found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try searching with different keywords or browse our categories above.
          </p>
        </div>
      )}
    </section>
  );
}