import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRejectComponent } from './icon-reject.component';

describe('IconRejectComponent', () => {
  let component: IconRejectComponent;
  let fixture: ComponentFixture<IconRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
