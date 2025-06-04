import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5ConfirmingRegistrationComponent } from './step5-confirming-registration.component';

describe('Step5ConfirmingRegistrationComponent', () => {
  let component: Step5ConfirmingRegistrationComponent;
  let fixture: ComponentFixture<Step5ConfirmingRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step5ConfirmingRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5ConfirmingRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
