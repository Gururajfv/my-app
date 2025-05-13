import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBehindTheSceneComponent } from './icon-behind-the-scene.component';

describe('IconBehindTheSceneComponent', () => {
  let component: IconBehindTheSceneComponent;
  let fixture: ComponentFixture<IconBehindTheSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBehindTheSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBehindTheSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
