import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCollateralEvaluationComponent } from './icon-collateral-evaluation.component';

describe('IconCollateralEvaluationComponent', () => {
  let component: IconCollateralEvaluationComponent;
  let fixture: ComponentFixture<IconCollateralEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCollateralEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCollateralEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
