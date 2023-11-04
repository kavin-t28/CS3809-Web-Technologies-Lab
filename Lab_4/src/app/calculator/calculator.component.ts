import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  displayValue: string = '';

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {}

  onButtonClick(value: string): void {
    this.displayValue += value;
  }

  calculate(): void {
    try {
      this.displayValue = this.calculatorService.calculate(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clear(): void {
    this.displayValue = '';
  }
}
