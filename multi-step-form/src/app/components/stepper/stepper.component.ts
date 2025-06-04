import { Component,OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { FormService } from '../../services/form.service';

import { Step1PersonalInfoComponent } from '../step1-personal-info/step1-personal-info.component';
import { Step2SelectPlanComponent } from '../step2-select-plan/step2-select-plan.component';
import { Step3AddOnsComponent } from '../step3-add-ons/step3-add-ons.component';
import { Step4SummaryComponent } from '../step4-summary/step4-summary.component';
import { Step5ConfirmingRegistrationComponent } from '../step5-confirming-registration/step5-confirming-registration.component';



@Component({
  selector: 'app-stepper',
  imports: 
  [
    CommonModule, 
    Step1PersonalInfoComponent, 
    Step2SelectPlanComponent,
    Step3AddOnsComponent,
    Step4SummaryComponent,
    Step5ConfirmingRegistrationComponent,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
  pageIndex: number= 0;

  constructor(private formService: FormService){ }

  private subscription!: Subscription;

  ngOnInit():void {
    this.subscription = this.formService.pageIndex$.subscribe(
      value => {
        this.pageIndex = value;
      }
    )
    console.log(`This from STEPPER, saying that the page index vale a ${this.pageIndex}`);
  }

  ngOnDestroy (){
    this.subscription.unsubscribe();
  }

  
  

}
