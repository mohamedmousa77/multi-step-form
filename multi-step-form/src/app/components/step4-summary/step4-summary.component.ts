import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-step4-summary',
  imports: [],
  templateUrl: './step4-summary.component.html',
  styleUrl: './step4-summary.component.css'
})
export class Step4SummaryComponent {
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
