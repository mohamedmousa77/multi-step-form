import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1PersonalInfoComponent } from '../step1-personal-info/step1-personal-info.component';
import { Step2SelectPlanComponent } from '../step2-select-plan/step2-select-plan.component';
@Component({
  selector: 'app-stepper',
  imports: 
  [
    CommonModule, 
    Step1PersonalInfoComponent, 
    Step2SelectPlanComponent,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
}
