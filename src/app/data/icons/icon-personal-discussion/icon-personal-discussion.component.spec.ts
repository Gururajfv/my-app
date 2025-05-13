import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPersonalDiscussionComponent } from './icon-personal-discussion.component';

describe('IconPersonalDiscussionComponent', () => {
  let component: IconPersonalDiscussionComponent;
  let fixture: ComponentFixture<IconPersonalDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPersonalDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPersonalDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
