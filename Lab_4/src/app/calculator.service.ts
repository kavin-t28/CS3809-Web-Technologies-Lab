import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculate(expression: string): string {
    try {
      return eval(expression).toString();
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }
}
