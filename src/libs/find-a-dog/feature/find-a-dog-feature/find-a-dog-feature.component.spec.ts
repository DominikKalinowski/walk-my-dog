import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindADogFeatureComponent } from './find-a-dog-feature.component';

describe('FindADogFeatureComponent', () => {
  let component: FindADogFeatureComponent;
  let fixture: ComponentFixture<FindADogFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindADogFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindADogFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
