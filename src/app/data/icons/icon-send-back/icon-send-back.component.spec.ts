import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSendBackComponent } from './icon-send-back.component';

describe('IconSendBackComponent', () => {
  let component: IconSendBackComponent;
  let fixture: ComponentFixture<IconSendBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSendBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSendBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
