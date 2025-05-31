import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2SelectPlanComponent } from './step2-select-plan.component';

describe('Step2SelectPlanComponent', () => {
  let component: Step2SelectPlanComponent;
  let fixture: ComponentFixture<Step2SelectPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2SelectPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2SelectPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
