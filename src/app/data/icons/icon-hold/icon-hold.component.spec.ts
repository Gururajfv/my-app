import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHoldComponent } from './icon-hold.component';

describe('IconHoldComponent', () => {
  let component: IconHoldComponent;
  let fixture: ComponentFixture<IconHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconHoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
