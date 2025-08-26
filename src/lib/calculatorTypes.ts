export interface Calculator {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  featured?: boolean;
}

export interface CalculatorCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  calculators: Calculator[];
}

export const calculatorCategories: CalculatorCategory[] = [
  {
    id: 'financial',
    name: 'Financial Calculators',
    description: 'Mortgage, loan, investment and retirement planning tools',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200',
    calculators: [
      { id: 'mortgage', name: 'Mortgage Calculator', description: 'Calculate monthly mortgage payments', category: 'financial', icon: 'home', featured: true },
      { id: 'loan', name: 'Loan Calculator', description: 'Calculate loan payments and interest', category: 'financial', icon: 'banknote' },
      { id: 'auto-loan', name: 'Auto Loan Calculator', description: 'Calculate car loan payments', category: 'financial', icon: 'car', featured: true },
      { id: 'interest', name: 'Interest Calculator', description: 'Calculate compound interest', category: 'financial', icon: 'trending-up' },
      { id: 'investment', name: 'Investment Calculator', description: 'Calculate investment returns', category: 'financial', icon: 'chart-line' },
      { id: 'retirement', name: 'Retirement Calculator', description: 'Plan for retirement savings', category: 'financial', icon: 'piggy-bank' },
      { id: 'salary', name: 'Salary Calculator', description: 'Calculate take-home pay', category: 'financial', icon: 'wallet' }
    ]
  },
  {
    id: 'health',
    name: 'Fitness & Health',
    description: 'BMI, calorie, pregnancy and health monitoring tools',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200',
    calculators: [
      { id: 'bmi', name: 'BMI Calculator', description: 'Calculate body mass index', category: 'health', icon: 'scale', featured: true },
      { id: 'calorie', name: 'Calorie Calculator', description: 'Calculate daily calorie needs', category: 'health', icon: 'flame', featured: true },
      { id: 'body-fat', name: 'Body Fat Calculator', description: 'Calculate body fat percentage', category: 'health', icon: 'activity' },
      { id: 'bmr', name: 'BMR Calculator', description: 'Calculate basal metabolic rate', category: 'health', icon: 'heart' },
      { id: 'ideal-weight', name: 'Ideal Weight Calculator', description: 'Calculate ideal body weight', category: 'health', icon: 'target' },
      { id: 'pregnancy', name: 'Pregnancy Calculator', description: 'Calculate due date and pregnancy stages', category: 'health', icon: 'baby' }
    ]
  },
  {
    id: 'math',
    name: 'Math Calculators',
    description: 'Scientific, fraction, percentage and geometry tools',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200',
    calculators: [
      { id: 'scientific', name: 'Scientific Calculator', description: 'Advanced mathematical calculations', category: 'math', icon: 'calculator', featured: true },
      { id: 'fraction', name: 'Fraction Calculator', description: 'Calculate with fractions', category: 'math', icon: 'divide' },
      { id: 'percentage', name: 'Percentage Calculator', description: 'Calculate percentages easily', category: 'math', icon: 'percent', featured: true },
      { id: 'triangle', name: 'Triangle Calculator', description: 'Calculate triangle properties', category: 'math', icon: 'triangle' },
      { id: 'random', name: 'Random Number Generator', description: 'Generate random numbers', category: 'math', icon: 'shuffle' },
      { id: 'standard-deviation', name: 'Standard Deviation Calculator', description: 'Calculate statistical measures', category: 'math', icon: 'bar-chart' }
    ]
  },
  {
    id: 'other',
    name: 'Other Calculators',
    description: 'Age, date, time, GPA and utility calculators',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200',
    calculators: [
      { id: 'age', name: 'Age Calculator', description: 'Calculate your exact age', category: 'other', icon: 'calendar', featured: true },
      { id: 'date', name: 'Date Calculator', description: 'Calculate dates and durations', category: 'other', icon: 'calendar-days' },
      { id: 'time', name: 'Time Calculator', description: 'Calculate time differences', category: 'other', icon: 'clock' },
      { id: 'gpa', name: 'GPA Calculator', description: 'Calculate grade point average', category: 'other', icon: 'graduation-cap' },
      { id: 'password', name: 'Password Generator', description: 'Generate secure passwords', category: 'other', icon: 'key' },
      { id: 'conversion', name: 'Unit Converter', description: 'Convert between units', category: 'other', icon: 'arrow-right-left' }
    ]
  }
];

export const featuredCalculators = calculatorCategories
  .flatMap(category => category.calculators)
  .filter(calc => calc.featured);
