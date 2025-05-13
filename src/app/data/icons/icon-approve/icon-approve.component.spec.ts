import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconApproveComponent } from './icon-approve.component';

describe('IconApproveComponent', () => {
  let component: IconApproveComponent;
  let fixture: ComponentFixture<IconApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
