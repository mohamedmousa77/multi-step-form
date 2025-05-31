import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3AddOnsComponent } from './step3-add-ons.component';

describe('Step3AddOnsComponent', () => {
  let component: Step3AddOnsComponent;
  let fixture: ComponentFixture<Step3AddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3AddOnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3AddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
