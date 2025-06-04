import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FormService, PlanInfo } from '../../services/form.service';

@Component({
  selector: 'app-step2-select-plan',
  imports: [CommonModule,FormsModule],
  templateUrl: './step2-select-plan.component.html',
  styleUrl: './step2-select-plan.component.css'
})
export class Step2SelectPlanComponent {
  isYearly: boolean = false;
  selectedIndex: number = 0;
  isSelected: boolean = false;
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
    this.isSelected = true;
    this.selectedIndex = index;
    if(this.isYearly){
      this.formService.setPlanInfo({price: this.yearlyPlans[index].price, title: this.yearlyPlans[index].title});
    }else {
      this.formService.setPlanInfo({price: this.monthlyPlans[index].price, title: this.monthlyPlans[index].title});
    }
  }

  get selectedPlans() {
    // console.log(`selected plans called, ${this.isYearly}`);
    return this.isYearly ? this.yearlyPlans : this.monthlyPlans;
  }


  onNext(){
    if(!this.isSelected){
    this.formService.setPlanInfo({price: this.monthlyPlans[0].price, title: this.monthlyPlans[0].title});
    }
    this.formService.goNextPage();
  }
  onBack(){
    this.formService.goBack();
  }

}
