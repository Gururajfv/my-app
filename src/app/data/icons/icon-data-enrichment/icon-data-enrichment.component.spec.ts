import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDataEnrichmentComponent } from './icon-data-enrichment.component';

describe('IconDataEnrichmentComponent', () => {
  let component: IconDataEnrichmentComponent;
  let fixture: ComponentFixture<IconDataEnrichmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDataEnrichmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDataEnrichmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
