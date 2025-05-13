import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSideLogoComponent } from './icon-side-logo.component';

describe('IconSideLogoComponent', () => {
  let component: IconSideLogoComponent;
  let fixture: ComponentFixture<IconSideLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSideLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSideLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
