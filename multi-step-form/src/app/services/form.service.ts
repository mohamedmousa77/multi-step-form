import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  private pageIndexSubject = new BehaviorSubject<number>(0);
  pageIndex$ = this.pageIndexSubject.asObservable();
  
  goNextPage(): void {
    const current = this.pageIndexSubject.value;
    this.pageIndexSubject.next(current + 1);

    console.log(
      `Services NEXXT called, current index = ${current} 
      new index: ${this.pageIndexSubject}`
    );
  }

  goBack(): void {
    
    const current = this.pageIndexSubject.value;
    this.pageIndexSubject.next(current - 1);
    console.log(
      `Services BACK called, current index = ${current} 
      new index: ${this.pageIndexSubject}`
    );

  }
}
