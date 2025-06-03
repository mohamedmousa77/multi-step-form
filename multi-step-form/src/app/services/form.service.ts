import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface PlanInfo {
    title: string,
    price: string,
}

export interface ServiceInfo {
  name: string,
  price: string,
}

@Injectable({
  providedIn: 'root'
})


export class FormService {
  constructor() { }
  // {'name':string, 'email':string, 'phoneNumber':string} 

   private personalInfoSubject = new BehaviorSubject<PersonalInfo>( {
    name:'',
    phone:'',
    email:'',
  });

  personalInfo$ = this.personalInfoSubject.asObservable();

  private planSubjrct = new BehaviorSubject<PlanInfo>({
    price:'',
    title:'',
  });

  planInfo$ = this.planSubjrct.asObservable();

  private serviceAddedSubject = new BehaviorSubject<ServiceInfo[]>([]);

  ServiceAdded$ = this.serviceAddedSubject.asObservable();


  setPersonalInfo (data: PersonalInfo){
    console.log(`set personal Info called: data received: ${data}`);
    this.personalInfoSubject.next(data);
  }
  getPersonalInfo (): PersonalInfo{
      return this.personalInfoSubject.getValue();
  }

  setPlanInfo (data: PlanInfo){
    this.planSubjrct.next(data);
  }

  getPlanInfo(): PlanInfo {
    return this.planSubjrct.getValue();
  }

  setServiceInfo(data:ServiceInfo[]){

  }
  getServiceInfo(): ServiceInfo[]{
    return this.serviceAddedSubject.getValue();
  }

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
