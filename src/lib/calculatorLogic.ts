export class ScientificCalculator {
  private display: string = '0';
  private previousInput: string = '';
  private operation: string | null = null;
  private waitingForOperand: boolean = false;
  private memory: number = 0;

  getDisplay(): string {
    return this.display;
  }

  getPreviousInput(): string {
    return this.previousInput;
  }

  inputNumber(value: string): void {
    if (this.waitingForOperand) {
      this.display = value;
      this.waitingForOperand = false;
    } else {
      this.display = this.display === '0' ? value : this.display + value;
    }
  }

  inputDecimal(): void {
    if (this.waitingForOperand) {
      this.display = '0.';
      this.waitingForOperand = false;
    } else if (this.display.indexOf('.') === -1) {
      this.display += '.';
    }
  }

  inputOperation(nextOperation: string): void {
    const inputValue = parseFloat(this.display);

    if (this.operation && this.waitingForOperand) {
      this.operation = nextOperation;
      return;
    }

    if (this.previousInput === '') {
      this.previousInput = inputValue.toString();
    } else if (this.operation) {
      const currentValue = parseFloat(this.previousInput);
      const newValue = this.calculate(currentValue, inputValue, this.operation);

      this.display = String(newValue);
      this.previousInput = String(newValue);
    }

    this.waitingForOperand = true;
    this.operation = nextOperation;
  }

  calculate(firstOperand: number, secondOperand: number, operation: string): number {
    switch (operation) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '×':
        return firstOperand * secondOperand;
      case '÷':
        return firstOperand / secondOperand;
      case '=':
        return secondOperand;
      default:
        return secondOperand;
    }
  }

  performEquals(): void {
    const inputValue = parseFloat(this.display);

    if (this.operation && this.previousInput !== '') {
      const currentValue = parseFloat(this.previousInput);
      const newValue = this.calculate(currentValue, inputValue, this.operation);

      this.display = String(newValue);
      this.previousInput = '';
      this.operation = null;
      this.waitingForOperand = true;
    }
  }

  performFunction(func: string): void {
    const value = parseFloat(this.display);
    let result: number;

    switch (func) {
      case 'sin':
        result = Math.sin(value * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(value * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(value * Math.PI / 180);
        break;
      case 'ln':
        result = Math.log(value);
        break;
      case 'log':
        result = Math.log10(value);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'square':
        result = value * value;
        break;
      case 'inverse':
        result = 1 / value;
        break;
      case 'pi':
        result = Math.PI;
        break;
      case 'e':
        result = Math.E;
        break;
      case 'factorial':
        result = this.factorial(value);
        break;
      case 'percent':
        result = value / 100;
        break;
      case 'negate':
        result = -value;
        break;
      default:
        return;
    }

    this.display = String(result);
    this.waitingForOperand = true;
  }

  private factorial(n: number): number {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  clear(): void {
    this.display = '0';
    this.previousInput = '';
    this.operation = null;
    this.waitingForOperand = false;
  }

  clearEntry(): void {
    this.display = '0';
    this.waitingForOperand = false;
  }

  backspace(): void {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
  }

  memoryAdd(): void {
    this.memory += parseFloat(this.display);
  }

  memorySubtract(): void {
    this.memory -= parseFloat(this.display);
  }

  memoryRecall(): void {
    this.display = String(this.memory);
    this.waitingForOperand = true;
  }

  memoryClear(): void {
    this.memory = 0;
  }
}

export const calculateLoanPayment = (principal: number, rate: number, years: number): number => {
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = years * 12;
  
  if (monthlyRate === 0) {
    return principal / numberOfPayments;
  }
  
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
         (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
};

export const calculateBMI = (heightFeet: number, weightLbs: number): { bmi: number; category: string } => {
  const heightInches = heightFeet * 12;
  const bmi = (weightLbs / (heightInches * heightInches)) * 703;
  
  let category: string;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal Weight';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }
  
  return { bmi: Math.round(bmi * 10) / 10, category };
};
