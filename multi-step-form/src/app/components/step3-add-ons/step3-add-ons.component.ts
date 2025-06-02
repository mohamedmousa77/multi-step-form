import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-step3-add-ons',
  imports: [CommonModule],
  templateUrl: './step3-add-ons.component.html',
  styleUrl: './step3-add-ons.component.css'
})
export class Step3AddOnsComponent {

  constructor (private formService:FormService){}
  addOns = [
    {
      'title':'Online services',
      'desc':'Access to multiplayer games',
      'price':'+$1/mo'
    },
    {
      'title':'Larger storage',
      'desc':'Extra 1TB to cloud save',
      'price':'+$2/mo'
    },
    {
      'title':'Customizable profile',
      'desc':'Custome theme on your profile',
      'price':'+$2/mo'
    },
  ];

  
    onNext(){
    console.log(`on Next called! `);
    this.formService.goNextPage();
  }
  onBack(){
    console.log(`on Back called! `);
    this.formService.goBack();
  }

}
