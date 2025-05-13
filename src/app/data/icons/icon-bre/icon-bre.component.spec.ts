import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconBreComponent } from './icon-bre.component';



describe('IconBreComponent', () => {
  let component: IconBreComponent;
  let fixture: ComponentFixture<IconBreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
