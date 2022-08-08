import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDogsFeatureComponent } from './my-dogs-feature.component';

describe('MyDogsFeatureComponent', () => {
  let component: MyDogsFeatureComponent;
  let fixture: ComponentFixture<MyDogsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDogsFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDogsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
