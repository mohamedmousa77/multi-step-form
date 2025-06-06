import { Component } from '@angular/core';
import { FormService, PersonalInfo, PlanInfo, ServiceInfo } from '../../services/form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step4-summary',
  imports: [CommonModule],
  templateUrl: './step4-summary.component.html',
  styleUrl: './step4-summary.component.css'
})
export class Step4SummaryComponent {
  selectedPlan = 'Arcade(Monthly)';
  selectedPlanPrice = '$9/mo';
  selectedAddOns = 
  [
    {
    'productName':'Online services',
    'price': '$1/mo'
    },
    {
    'productName':'Larger storage',
    'price': '$2/mo'
    },
  ];
  totalAmount = '$12/mo';

  constructor(private formService: FormService){ }

  personalInfo!: PersonalInfo;
  planSelected!: PlanInfo; 
  selectedAddsOns: ServiceInfo[] = [];

  ngOnInit() {
    this.personalInfo = this.formService.getPersonalInfo();
    this.planSelected = this.formService.getPlanInfo();
    this.formService.ServiceAdded$.subscribe(data => {
      this.selectedAddsOns = data;
    });
    
    console.log(`Personal info collected: ${this.personalInfo.name}.
      \n Plan Selected: ${this.planSelected.title}.
      \n Services selected: ${this.selectedAddsOns.length}`);
  }
  
  onConfirm(){
  // this.personalInfo = this.formService.getPersonalInfo();
  console.log(`Data collected: 
    Personal info: ${this.personalInfo.name, this.personalInfo.name}. 
    \n Plan selected: ${this.planSelected.title}.
    \n Services selected num: ${this.selectedAddOns.length}
    `);
    this.formService.goNextPage();
  }

  onBack(){
    console.log(`on Back called! `);
    this.formService.goBack();
  }

  changePlan() {
     this.formService.changePlan();

  }
}
