import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCommentsComponent } from './icon-comments.component';

describe('IconCommentsComponent', () => {
  let component: IconCommentsComponent;
  let fixture: ComponentFixture<IconCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
