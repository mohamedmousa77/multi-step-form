import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step1-personal-info',
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './step1-personal-info.component.html',
  styleUrl: './step1-personal-info.component.css'
})
export class Step1PersonalInfoComponent {
  personalForm: FormGroup;

  constructor (private fb: FormBuilder){
    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  get email() {
  return this.personalForm.get('email')!;
}

get phone() {
  return this.personalForm.get('phone')!;
}
get name() {
  return this.personalForm.get('name')!;
}

  onNext(){
    if(this.personalForm.valid){
      // Valid go to next step
    }else {
      this.personalForm.markAllAsTouched();
    }
  }



}
