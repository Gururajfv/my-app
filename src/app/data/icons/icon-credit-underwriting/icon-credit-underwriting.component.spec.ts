import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCreditUnderwritingComponent } from './icon-credit-underwriting.component';

describe('IconCreditUnderwritingComponent', () => {
  let component: IconCreditUnderwritingComponent;
  let fixture: ComponentFixture<IconCreditUnderwritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCreditUnderwritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCreditUnderwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
