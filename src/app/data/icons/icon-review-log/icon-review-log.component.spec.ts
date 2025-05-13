import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconReviewLogComponent } from './icon-review-log.component';

describe('IconReviewLogComponent', () => {
  let component: IconReviewLogComponent;
  let fixture: ComponentFixture<IconReviewLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconReviewLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconReviewLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
