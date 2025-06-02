import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-step2-select-plan',
  imports: [CommonModule,FormsModule],
  templateUrl: './step2-select-plan.component.html',
  styleUrl: './step2-select-plan.component.css'
})
export class Step2SelectPlanComponent {
  isYearly: boolean = false;
  selectedIndex: number = 0;

  constructor (private formService: FormService){}

  monthlyPlans = [
    {
      'icon':'icon-arcade.svg',
      'title':'Arcade',
      'price':'$9/mo',
    },
    {
      'icon':'icon-advanced.svg',
      'title':'Advanced',
      'price':'$12/mo',
    },
    {
      'icon':'icon-pro.svg',
      'title':'Pro',
      'price':'$15/mo',
    },
  ];
  yearlyPlans = [
    {
      'icon':'icon-arcade.svg',
      'title':'Arcade',
      'price':'$9/yr',
    },
    {
      'icon':'icon-advanced.svg',
      'title':'Advanced',
      'price':'$12/yr',
    },
    {
      'icon':'icon-pro.svg',
      'title':'Pro',
      'price':'$15/yr',
    },
];

  getIconPath(icon: string): string {
    return `/multi-step-form/src/assets/images/${icon}`;
  }

  selectPlan(index:number){
    this.selectedIndex = index;
  }

  get selectedPlans() {
    console.log(`selected plans called, ${this.isYearly}`);
    return this.isYearly ? this.yearlyPlans : this.monthlyPlans;
  }
  onNext(){
    console.log(`on Next called! `);
    this.formService.goNextPage();
  }
  onBack(){
    console.log(`on Back called! `);
    this.formService.goBack();
  }

}
