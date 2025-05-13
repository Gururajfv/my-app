import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDeviationComponent } from './icon-deviation.component';

describe('IconDeviationComponent', () => {
  let component: IconDeviationComponent;
  let fixture: ComponentFixture<IconDeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDeviationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
