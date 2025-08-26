
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousInput, setPreviousInput] = useState('');
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousInput === '') {
      setPreviousInput(String(inputValue));
    } else if (operation) {
      const currentValue = parseFloat(previousInput) || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousInput(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstOperand: number, secondOperand: number, operation: string): number => {
    switch (operation) {
      case '+': return firstOperand + secondOperand;
      case '-': return firstOperand - secondOperand;
      case '*': return firstOperand * secondOperand;
      case '/': return firstOperand / secondOperand;
      case '=': return secondOperand;
      default: return secondOperand;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousInput !== '' && operation) {
      const currentValue = parseFloat(previousInput) || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousInput('');
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousInput('');
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto bg-white shadow-2xl border-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-center text-lg font-semibold text-gray-800">
          Calculator
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Display */}
        <div className="bg-gray-900 text-white p-6 rounded-xl">
          <div className="text-right text-3xl font-mono font-bold break-all">
            {display}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <Button 
            variant="outline" 
            onClick={clear}
            className="col-span-2 h-14 text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold rounded-xl"
          >
            Clear
          </Button>
          <Button 
            variant="outline" 
            onClick={() => inputOperation('/')}
            className="h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl border-0"
          >
            ÷
          </Button>
          <Button 
            variant="outline" 
            onClick={() => inputOperation('*')}
            className="h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl border-0"
          >
            ×
          </Button>

          {/* Row 2 */}
          <Button variant="outline" onClick={() => inputNumber('7')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">7</Button>
          <Button variant="outline" onClick={() => inputNumber('8')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">8</Button>
          <Button variant="outline" onClick={() => inputNumber('9')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">9</Button>
          <Button 
            variant="outline" 
            onClick={() => inputOperation('-')}
            className="h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl border-0"
          >
            −
          </Button>

          {/* Row 3 */}
          <Button variant="outline" onClick={() => inputNumber('4')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">4</Button>
          <Button variant="outline" onClick={() => inputNumber('5')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">5</Button>
          <Button variant="outline" onClick={() => inputNumber('6')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">6</Button>
          <Button 
            variant="outline" 
            onClick={() => inputOperation('+')}
            className="h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl border-0"
          >
            +
          </Button>

          {/* Row 4 */}
          <Button variant="outline" onClick={() => inputNumber('1')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">1</Button>
          <Button variant="outline" onClick={() => inputNumber('2')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">2</Button>
          <Button variant="outline" onClick={() => inputNumber('3')} className="h-14 font-semibold rounded-xl hover:bg-gray-50">3</Button>
          <Button 
            variant="outline" 
            onClick={performCalculation}
            className="row-span-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl border-0"
          >
            =
          </Button>

          {/* Row 5 */}
          <Button 
            variant="outline" 
            onClick={() => inputNumber('0')}
            className="col-span-2 h-14 font-semibold rounded-xl hover:bg-gray-50"
          >
            0
          </Button>
          <Button variant="outline" onClick={inputDecimal} className="h-14 font-semibold rounded-xl hover:bg-gray-50">.</Button>
        </div>
      </CardContent>
    </Card>
  );
}
