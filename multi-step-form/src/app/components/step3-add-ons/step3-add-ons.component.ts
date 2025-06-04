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

  isChecked: boolean[] = [false, false, false]; 

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
  
  onCheckboxChange(event: Event, index: number): void {
    const selected = this.addOns[index];
    const input = event.target as HTMLInputElement;
    const checked = input.checked;
    this.isChecked[index] = input.checked;
    console.log(`Service selected: ${selected.title}, is checked: ${checked}`);
    if (checked) {
      this.formService.addService({ name: selected.title, price: selected.price });
    } else {
      this.formService.removeService(selected.title);
      }
  }
  
  onNext(){
    this.formService.goNextPage();
  }
  onBack(){
    this.formService.goBack();
  }

}
