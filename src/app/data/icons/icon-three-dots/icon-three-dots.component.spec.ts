import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconThreeDotsComponent } from './icon-three-dots.component';

describe('IconThreeDotsComponent', () => {
  let component: IconThreeDotsComponent;
  let fixture: ComponentFixture<IconThreeDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconThreeDotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconThreeDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
