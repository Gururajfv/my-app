import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalLoanApprovalComponent } from './final-loan-approval.component';

describe('FinalLoanApprovalComponent', () => {
  let component: FinalLoanApprovalComponent;
  let fixture: ComponentFixture<FinalLoanApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalLoanApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalLoanApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
