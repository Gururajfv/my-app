import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconQueryComponent } from './icon-query.component';

describe('IconQueryComponent', () => {
  let component: IconQueryComponent;
  let fixture: ComponentFixture<IconQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
