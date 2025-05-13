import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSearchHeaderComponent } from './icon-search-header.component';

describe('IconSearchHeaderComponent', () => {
  let component: IconSearchHeaderComponent;
  let fixture: ComponentFixture<IconSearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSearchHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
