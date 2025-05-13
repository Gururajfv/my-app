import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTableSearchComponent } from './icon-table-search.component';

describe('IconTableSearchComponent', () => {
  let component: IconTableSearchComponent;
  let fixture: ComponentFixture<IconTableSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTableSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
