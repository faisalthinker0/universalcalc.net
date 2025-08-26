import { useState } from "react";
import { useRoute } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculatorCategories } from "@/lib/calculatorTypes";
import { calculateLoanPayment, calculateBMI } from "@/lib/calculatorLogic";
import SEO, { generateCalculatorStructuredData } from "@/components/SEO";
import * as Icons from "lucide-react";

export default function CalculatorPage() {
  const [, params] = useRoute("/calculator/:type");
  const calculatorType = params?.type;

  const calculator = calculatorCategories
    .flatMap((cat) => cat.calculators)
    .find((calc) => calc.id === calculatorType);

  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<any>(null);

  if (!calculator) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Calculator Not Found
          </h1>
          <p className="text-gray-600">
            The requested calculator could not be found.
          </p>
        </div>
      </main>
    );
  }

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? (
      <IconComponent className="h-8 w-8" />
    ) : (
      <Icons.Calculator className="h-8 w-8" />
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    switch (calculatorType) {
      case "mortgage":
      case "loan":
      case "auto-loan":
        const amount = parseFloat(inputs.amount || "0");
        const rate = parseFloat(inputs.rate || "0");
        const years = parseFloat(inputs.years || "0");
        if (amount && rate && years) {
          const payment = calculateLoanPayment(amount, rate, years);
          const totalPayment = payment * years * 12;
          const totalInterest = totalPayment - amount;
          setResult({
            monthlyPayment: payment,
            totalPayment,
            totalInterest,
          });
        }
        break;

      case "bmi":
        const height = parseFloat(inputs.height || "0");
        const weight = parseFloat(inputs.weight || "0");
        if (height && weight) {
          const bmiResult = calculateBMI(height, weight);
          setResult(bmiResult);
        }
        break;

      case "percentage":
        const value = parseFloat(inputs.value || "0");
        const percentage = parseFloat(inputs.percentage || "0");
        if (value && percentage) {
          setResult({
            result: (value * percentage) / 100,
            percentage: percentage,
            of: value,
          });
        }
        break;

      case "age":
        const birthDate = new Date(inputs.birthDate || "");
        const today = new Date();
        if (birthDate && birthDate <= today) {
          const ageInMs = today.getTime() - birthDate.getTime();
          const ageInYears = Math.floor(
            ageInMs / (1000 * 60 * 60 * 24 * 365.25)
          );
          const ageInDays = Math.floor(ageInMs / (1000 * 60 * 60 * 24));
          setResult({
            years: ageInYears,
            days: ageInDays,
            months: Math.floor(ageInYears * 12),
          });
        }
        break;

      default:
        setResult({ message: "Calculation completed" });
    }
  };

  const renderInputs = () => {
    switch (calculatorType) {
      case "mortgage":
      case "loan":
      case "auto-loan":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="amount">Loan Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="100000"
                value={inputs.amount || ""}
                onChange={(e) => handleInputChange("amount", e.target.value)}
                data-testid="input-amount"
              />
            </div>
            <div>
              <Label htmlFor="rate">Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                placeholder="5.5"
                value={inputs.rate || ""}
                onChange={(e) => handleInputChange("rate", e.target.value)}
                data-testid="input-rate"
              />
            </div>
            <div>
              <Label htmlFor="years">Loan Term (Years)</Label>
              <Input
                id="years"
                type="number"
                placeholder="30"
                value={inputs.years || ""}
                onChange={(e) => handleInputChange("years", e.target.value)}
                data-testid="input-years"
              />
            </div>
          </div>
        );

      case "bmi":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="height">Height (feet)</Label>
              <Input
                id="height"
                type="number"
                placeholder="5.8"
                value={inputs.height || ""}
                onChange={(e) => handleInputChange("height", e.target.value)}
                data-testid="input-height"
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight (lbs)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="150"
                value={inputs.weight || ""}
                onChange={(e) => handleInputChange("weight", e.target.value)}
                data-testid="input-weight"
              />
            </div>
          </div>
        );

      case "percentage":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="percentage">Percentage (%)</Label>
              <Input
                id="percentage"
                type="number"
                placeholder="25"
                value={inputs.percentage || ""}
                onChange={(e) =>
                  handleInputChange("percentage", e.target.value)
                }
                data-testid="input-percentage"
              />
            </div>
            <div>
              <Label htmlFor="value">Of Value</Label>
              <Input
                id="value"
                type="number"
                placeholder="200"
                value={inputs.value || ""}
                onChange={(e) => handleInputChange("value", e.target.value)}
                data-testid="input-value"
              />
            </div>
          </div>
        );

      case "age":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="birthDate">Birth Date</Label>
              <Input
                id="birthDate"
                type="date"
                value={inputs.birthDate || ""}
                onChange={(e) => handleInputChange("birthDate", e.target.value)}
                data-testid="input-birth-date"
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-600">This calculator is coming soon!</p>
          </div>
        );
    }
  };

  const renderResult = () => {
    if (!result) return null;

    switch (calculatorType) {
      case "mortgage":
      case "loan":
      case "auto-loan":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Payment:</span>
              <span
                className="font-semibold text-primary"
                data-testid="result-monthly-payment"
              >
                ${result.monthlyPayment?.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Payment:</span>
              <span
                className="font-semibold"
                data-testid="result-total-payment"
              >
                ${result.totalPayment?.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Interest:</span>
              <span
                className="font-semibold"
                data-testid="result-total-interest"
              >
                ${result.totalInterest?.toFixed(2)}
              </span>
            </div>
          </div>
        );

      case "bmi":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">BMI:</span>
              <span
                className="font-semibold text-accent"
                data-testid="result-bmi-value"
              >
                {result.bmi}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span className="font-semibold" data-testid="result-bmi-category">
                {result.category}
              </span>
            </div>
          </div>
        );

      case "percentage":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="text-center">
              <span
                className="text-2xl font-bold text-primary"
                data-testid="result-percentage-value"
              >
                {result.result?.toFixed(2)}
              </span>
              <div className="text-gray-600 text-sm">
                {result.percentage}% of {result.of}
              </div>
            </div>
          </div>
        );

      case "age":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Age in Years:</span>
              <span
                className="font-semibold text-primary"
                data-testid="result-age-years"
              >
                {result.years}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Age in Months:</span>
              <span className="font-semibold" data-testid="result-age-months">
                {result.months}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Age in Days:</span>
              <span className="font-semibold" data-testid="result-age-days">
                {result.days}
              </span>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-center text-gray-600">{result.message}</p>
          </div>
        );
    }
  };

  const pageTitle = `${calculator.name} - UniversalCalc`;
  const pageDescription = `Use our free ${calculator.name.toLowerCase()} to ${calculator.description.toLowerCase()}. Fast, accurate, and mobile-friendly calculations.`;
  const canonicalUrl = `https://universalcalc.net/calculator/${calculatorType}`;

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        keywords={`${calculator.name.toLowerCase()}, ${calculatorType} calculator, free calculator, online calculator`}
        structuredData={generateCalculatorStructuredData(
          calculator.name,
          calculator.description,
          canonicalUrl
        )}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mr-4 shadow-lg">
              {getIcon(calculator.icon)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-shadow">
              {calculator.name}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {calculator.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover-lift border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Icons.Calculator className="mr-3 h-6 w-6 text-primary" />
                Calculator Inputs
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {renderInputs()}
              <Button
                className="w-full mt-8 h-12 text-lg font-semibold bg-primary hover:bg-primary-dark shadow-lg"
                onClick={handleCalculate}
                data-testid="button-calculate"
              >
                <Icons.Calculator className="mr-2 h-5 w-5" />
                Calculate
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Icons.BarChart3 className="mr-3 h-6 w-6 text-accent" />
                Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {result ? (
                renderResult()
              ) : (
                <div className="text-center py-12">
                  <Icons.Calculator className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Enter your values and click calculate to see results
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
