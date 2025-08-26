import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Heart } from "lucide-react";
import { calculateLoanPayment, calculateBMI } from "@/lib/calculatorLogic";

export default function QuickCalculators() {
  const [loanData, setLoanData] = useState({
    amount: "",
    rate: "",
    term: "",
    payment: 0,
  });

  const [bmiData, setBmiData] = useState({
    height: "",
    weight: "",
    bmi: 0,
    category: "",
  });

  const handleLoanCalculation = () => {
    const amount = parseFloat(loanData.amount);
    const rate = parseFloat(loanData.rate);
    const term = parseFloat(loanData.term);

    if (amount && rate && term) {
      const payment = calculateLoanPayment(amount, rate, term);
      setLoanData((prev) => ({ ...prev, payment }));
    }
  };

  const handleBMICalculation = () => {
    const height = parseFloat(bmiData.height);
    const weight = parseFloat(bmiData.weight);

    if (height && weight) {
      const result = calculateBMI(height, weight);
      setBmiData((prev) => ({
        ...prev,
        bmi: result.bmi,
        category: result.category,
      }));
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Quick Loan Calculator */}
      <Card className="hover-lift border-0 shadow-xl bg-gradient-to-br from-card to-primary/5">
        <CardContent className="p-8">
          <h4 className="text-xl font-bold text-foreground mb-6 flex items-center">
            <div className="p-2 bg-primary/10 rounded-lg mr-3">
              <TrendingUp className="text-primary" />
            </div>
            Quick Loan Calculator
          </h4>
          <div className="space-y-4">
            <div>
              <Label htmlFor="loan-amount">Loan Amount</Label>
              <Input
                id="loan-amount"
                type="number"
                placeholder="$100,000"
                value={loanData.amount}
                onChange={(e) =>
                  setLoanData((prev) => ({ ...prev, amount: e.target.value }))
                }
                data-testid="input-loan-amount"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                <Input
                  id="interest-rate"
                  type="number"
                  placeholder="5.5"
                  value={loanData.rate}
                  onChange={(e) =>
                    setLoanData((prev) => ({ ...prev, rate: e.target.value }))
                  }
                  data-testid="input-interest-rate"
                />
              </div>
              <div>
                <Label htmlFor="loan-term">Term (Years)</Label>
                <Input
                  id="loan-term"
                  type="number"
                  placeholder="30"
                  value={loanData.term}
                  onChange={(e) =>
                    setLoanData((prev) => ({ ...prev, term: e.target.value }))
                  }
                  data-testid="input-loan-term"
                />
              </div>
            </div>
            <Button
              className="w-full shadow-lg h-12 text-lg font-semibold"
              onClick={handleLoanCalculation}
              data-testid="button-calculate-loan"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Calculate Payment
            </Button>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">
                Monthly Payment:
              </div>
              <div
                className="text-3xl font-bold text-primary"
                data-testid="result-loan-payment"
              >
                ${loanData.payment.toFixed(2)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick BMI Calculator */}
      <Card className="hover-lift border-0 shadow-xl bg-gradient-to-br from-card to-accent/5">
        <CardContent className="p-8">
          <h4 className="text-xl font-bold text-foreground mb-6 flex items-center">
            <div className="p-2 bg-accent/10 rounded-lg mr-3">
              <Heart className="text-accent" />
            </div>
            Quick BMI Calculator
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="height">Height (ft)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="5.8"
                  value={bmiData.height}
                  onChange={(e) =>
                    setBmiData((prev) => ({ ...prev, height: e.target.value }))
                  }
                  data-testid="input-height"
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight (lbs)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="150"
                  value={bmiData.weight}
                  onChange={(e) =>
                    setBmiData((prev) => ({ ...prev, weight: e.target.value }))
                  }
                  data-testid="input-weight"
                />
              </div>
            </div>
            <Button
              className="w-full shadow-lg h-12 text-lg font-semibold"
              onClick={handleBMICalculation}
              data-testid="button-calculate-bmi"
            >
              <Heart className="mr-2 h-5 w-5" />
              Calculate BMI
            </Button>
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-6 rounded-xl border border-accent/20">
              <div className="text-sm text-muted-foreground mb-1">
                Your BMI:
              </div>
              <div
                className="text-3xl font-bold text-accent"
                data-testid="result-bmi"
              >
                {bmiData.bmi || "0"}
              </div>
              <div
                className="text-sm font-medium text-muted-foreground mt-2"
                data-testid="result-bmi-category"
              >
                {bmiData.category || "Enter your details"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
