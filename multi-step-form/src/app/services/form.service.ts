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

  private pageIndexSubject = new BehaviorSubject<number>(0);
  pageIndex$ = this.pageIndexSubject.asObservable();

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

  addService(service: ServiceInfo):void {
      console.log(`Add ons in service called!!!
        Service received: ${service.name}`);
    const currentService  = this.serviceAddedSubject.getValue();
    const exist = currentService.find(s => s.name === service.name);
    if(!exist){
      const updateList = [...currentService,service];
      this.serviceAddedSubject.next(updateList);
      console.log(`is not exist. ADDED.`);
      console.table(updateList);
    }
  }

  removeService(ServiceTitle: string):void{
    const currentService  = this.serviceAddedSubject.getValue();
    const update = currentService.filter(s => s.name !== ServiceTitle);
    this.serviceAddedSubject.next(update);
    console.log(`Remove called. REMOVED.`);
      console.table(update);
  }

  getServiceInfo(): ServiceInfo[]{
    return this.serviceAddedSubject.getValue();
  }

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


  goNextPage(): void {
    const current = this.pageIndexSubject.value;
    this.pageIndexSubject.next(current + 1);
  }

  changePlan(): void {
    this.pageIndexSubject.next(1);
  }

  goBack(): void {
    const current = this.pageIndexSubject.value;
    this.pageIndexSubject.next(current - 1);
  }
}
