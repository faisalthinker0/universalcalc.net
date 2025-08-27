import { useState, useEffect } from "react";
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

  // Scroll to top when calculator type changes (fixes mobile navigation issue)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [calculatorType]);

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

      case "scientific":
        const expression = inputs.expression || "";
        if (expression) {
          try {
            // Basic scientific calculation (for demo purposes)
            const result = eval(expression.replace(/[^0-9+\-*/().]/g, ""));
            setResult({
              expression: expression,
              result: result,
              message: "Calculation completed successfully",
            });
          } catch (error) {
            setResult({
              error: "Invalid expression",
              message: "Please check your input",
            });
          }
        }
        break;

      case "fraction":
        const num1 = parseFloat(inputs.numerator1 || "0");
        const den1 = parseFloat(inputs.denominator1 || "1");
        const num2 = parseFloat(inputs.numerator2 || "0");
        const den2 = parseFloat(inputs.denominator2 || "1");
        const operation = inputs.operation || "add";

        if (num1 && den1 && num2 && den2) {
          let result;
          switch (operation) {
            case "add":
              result = (num1 * den2 + num2 * den1) / (den1 * den2);
              break;
            case "subtract":
              result = (num1 * den2 - num2 * den1) / (den1 * den2);
              break;
            case "multiply":
              result = (num1 * num2) / (den1 * den2);
              break;
            case "divide":
              result = (num1 * den2) / (den1 * num2);
              break;
            default:
              result = (num1 * den2 + num2 * den1) / (den1 * den2);
          }
          setResult({
            operation: operation,
            result: result,
            message: `${operation} operation completed`,
          });
        }
        break;

      case "triangle":
        const sideA = parseFloat(inputs.sideA || "0");
        const sideB = parseFloat(inputs.sideB || "0");
        const sideC = parseFloat(inputs.sideC || "0");

        if (sideA && sideB && sideC) {
          // Heron's formula for area
          const s = (sideA + sideB + sideC) / 2;
          const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
          const perimeter = sideA + sideB + sideC;

          setResult({
            area: area.toFixed(2),
            perimeter: perimeter.toFixed(2),
            message: "Triangle calculations completed",
          });
        }
        break;

      case "random":
        const min = parseInt(inputs.min || "1");
        const max = parseInt(inputs.max || "100");
        const count = parseInt(inputs.count || "1");

        if (min < max && count > 0 && count <= 100) {
          const numbers = [];
          for (let i = 0; i < count; i++) {
            numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
          }
          setResult({
            numbers: numbers,
            count: count,
            range: `${min} to ${max}`,
            message: `${count} random number(s) generated`,
          });
        }
        break;

      case "conversion":
        const fromValue = parseFloat(inputs.fromValue || "0");
        const fromUnit = inputs.fromUnit || "meters";
        const toUnit = inputs.toUnit || "feet";

        if (fromValue) {
          // Basic conversion examples
          let result;
          if (fromUnit === "meters" && toUnit === "feet") {
            result = fromValue * 3.28084;
          } else if (fromUnit === "feet" && toUnit === "meters") {
            result = fromValue * 0.3048;
          } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (fromValue * 9) / 5 + 32;
          } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = ((fromValue - 32) * 5) / 9;
          } else {
            result = fromValue; // No conversion available
          }

          setResult({
            fromValue: fromValue,
            fromUnit: fromUnit,
            toUnit: toUnit,
            result: result.toFixed(2),
            message: "Conversion completed",
          });
        }
        break;

      default:
        setResult({ message: "This calculator is coming soon!" });
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

      case "scientific":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="expression">Expression</Label>
              <Input
                id="expression"
                type="text"
                placeholder="e.g., 2 + 2 * 3"
                value={inputs.expression || ""}
                onChange={(e) =>
                  handleInputChange("expression", e.target.value)
                }
                data-testid="input-expression"
              />
            </div>
          </div>
        );

      case "fraction":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="numerator1">Numerator 1</Label>
              <Input
                id="numerator1"
                type="number"
                placeholder="1"
                value={inputs.numerator1 || ""}
                onChange={(e) =>
                  handleInputChange("numerator1", e.target.value)
                }
                data-testid="input-numerator1"
              />
            </div>
            <div>
              <Label htmlFor="denominator1">Denominator 1</Label>
              <Input
                id="denominator1"
                type="number"
                placeholder="1"
                value={inputs.denominator1 || ""}
                onChange={(e) =>
                  handleInputChange("denominator1", e.target.value)
                }
                data-testid="input-denominator1"
              />
            </div>
            <div>
              <Label htmlFor="numerator2">Numerator 2</Label>
              <Input
                id="numerator2"
                type="number"
                placeholder="1"
                value={inputs.numerator2 || ""}
                onChange={(e) =>
                  handleInputChange("numerator2", e.target.value)
                }
                data-testid="input-numerator2"
              />
            </div>
            <div>
              <Label htmlFor="denominator2">Denominator 2</Label>
              <Input
                id="denominator2"
                type="number"
                placeholder="1"
                value={inputs.denominator2 || ""}
                onChange={(e) =>
                  handleInputChange("denominator2", e.target.value)
                }
                data-testid="input-denominator2"
              />
            </div>
            <div>
              <Label htmlFor="operation">Operation</Label>
              <select
                id="operation"
                value={inputs.operation || "add"}
                onChange={(e) => handleInputChange("operation", e.target.value)}
                data-testid="input-operation"
              >
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
              </select>
            </div>
          </div>
        );

      case "triangle":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="sideA">Side A</Label>
              <Input
                id="sideA"
                type="number"
                placeholder="3"
                value={inputs.sideA || ""}
                onChange={(e) => handleInputChange("sideA", e.target.value)}
                data-testid="input-side-a"
              />
            </div>
            <div>
              <Label htmlFor="sideB">Side B</Label>
              <Input
                id="sideB"
                type="number"
                placeholder="4"
                value={inputs.sideB || ""}
                onChange={(e) => handleInputChange("sideB", e.target.value)}
                data-testid="input-side-b"
              />
            </div>
            <div>
              <Label htmlFor="sideC">Side C</Label>
              <Input
                id="sideC"
                type="number"
                placeholder="5"
                value={inputs.sideC || ""}
                onChange={(e) => handleInputChange("sideC", e.target.value)}
                data-testid="input-side-c"
              />
            </div>
          </div>
        );

      case "random":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="min">Minimum</Label>
              <Input
                id="min"
                type="number"
                placeholder="1"
                value={inputs.min || ""}
                onChange={(e) => handleInputChange("min", e.target.value)}
                data-testid="input-min"
              />
            </div>
            <div>
              <Label htmlFor="max">Maximum</Label>
              <Input
                id="max"
                type="number"
                placeholder="100"
                value={inputs.max || ""}
                onChange={(e) => handleInputChange("max", e.target.value)}
                data-testid="input-max"
              />
            </div>
            <div>
              <Label htmlFor="count">Count</Label>
              <Input
                id="count"
                type="number"
                placeholder="10"
                value={inputs.count || ""}
                onChange={(e) => handleInputChange("count", e.target.value)}
                data-testid="input-count"
              />
            </div>
          </div>
        );

      case "conversion":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="fromValue">Value to Convert</Label>
              <Input
                id="fromValue"
                type="number"
                placeholder="10"
                value={inputs.fromValue || ""}
                onChange={(e) => handleInputChange("fromValue", e.target.value)}
                data-testid="input-from-value"
              />
            </div>
            <div>
              <Label htmlFor="fromUnit">From Unit</Label>
              <select
                id="fromUnit"
                value={inputs.fromUnit || "meters"}
                onChange={(e) => handleInputChange("fromUnit", e.target.value)}
                data-testid="input-from-unit"
              >
                <option value="meters">Meters</option>
                <option value="feet">Feet</option>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
              </select>
            </div>
            <div>
              <Label htmlFor="toUnit">To Unit</Label>
              <select
                id="toUnit"
                value={inputs.toUnit || "feet"}
                onChange={(e) => handleInputChange("toUnit", e.target.value)}
                data-testid="input-to-unit"
              >
                <option value="meters">Meters</option>
                <option value="feet">Feet</option>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
              </select>
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

      case "scientific":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Expression:</span>
              <span
                className="font-semibold text-primary"
                data-testid="result-expression"
              >
                {result.expression}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Result:</span>
              <span
                className="font-semibold text-accent"
                data-testid="result-scientific-value"
              >
                {result.result}
              </span>
            </div>
            {result.error && (
              <div className="text-red-500 text-sm">Error: {result.error}</div>
            )}
            {result.message && (
              <div className="text-green-600 text-sm">{result.message}</div>
            )}
          </div>
        );

      case "fraction":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Operation:</span>
              <span
                className="font-semibold text-primary"
                data-testid="result-fraction-operation"
              >
                {result.operation}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Result:</span>
              <span
                className="font-semibold text-accent"
                data-testid="result-fraction-value"
              >
                {result.result}
              </span>
            </div>
            {result.message && (
              <div className="text-green-600 text-sm">{result.message}</div>
            )}
          </div>
        );

      case "triangle":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Area:</span>
              <span
                className="font-semibold text-primary"
                data-testid="result-triangle-area"
              >
                {result.area}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Perimeter:</span>
              <span
                className="font-semibold text-accent"
                data-testid="result-triangle-perimeter"
              >
                {result.perimeter}
              </span>
            </div>
            {result.message && (
              <div className="text-green-600 text-sm">{result.message}</div>
            )}
          </div>
        );

      case "random":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Range:</span>
              <span
                className="font-semibold text-primary"
                data-testid="result-random-range"
              >
                {result.range}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Numbers:</span>
              <span
                className="font-semibold text-accent"
                data-testid="result-random-numbers"
              >
                {result.numbers.join(", ")}
              </span>
            </div>
            {result.message && (
              <div className="text-green-600 text-sm">{result.message}</div>
            )}
          </div>
        );

      case "conversion":
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">From:</span>
              <span
                className="font-semibold text-primary"
                data-testid="result-conversion-from"
              >
                {result.fromValue} {result.fromUnit}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">To:</span>
              <span
                className="font-semibold text-accent"
                data-testid="result-conversion-to"
              >
                {result.result} {result.toUnit}
              </span>
            </div>
            {result.message && (
              <div className="text-green-600 text-sm">{result.message}</div>
            )}
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
        breadcrumbs={[
          { name: "Home", url: "https://universalcalc.net" },
          {
            name:
              calculator.category.charAt(0).toUpperCase() +
              calculator.category.slice(1),
            url: `https://universalcalc.net/${calculator.category}`,
          },
          { name: calculator.name, url: canonicalUrl },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mr-4 shadow-lg">
              {getIcon(calculator.icon)}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-shadow">
              {calculator.name}
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {calculator.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover-lift border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-lg">
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Icons.Calculator className="mr-3 h-6 w-6 text-primary" />
                Calculator Inputs
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-8">
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
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Icons.BarChart3 className="mr-3 h-6 w-6 text-accent" />
                Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-8">
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
