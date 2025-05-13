import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueCheckComponent } from './true-check.component';

describe('TrueCheckComponent', () => {
  let component: TrueCheckComponent;
  let fixture: ComponentFixture<TrueCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
