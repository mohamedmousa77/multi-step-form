import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
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

  onNext(){
    console.log(`on Next called! `);
    this.formService.goNextPage();
  }
  onBack(){
    console.log(`on Back called! `);
    this.formService.goBack();
  }

}
