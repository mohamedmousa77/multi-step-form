import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4SummaryComponent } from './step4-summary.component';

describe('Step4SummaryComponent', () => {
  let component: Step4SummaryComponent;
  let fixture: ComponentFixture<Step4SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4SummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
