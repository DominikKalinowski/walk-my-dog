import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindADogUiComponent } from './find-a-dog-ui.component';

describe('FindADogUiComponent', () => {
  let component: FindADogUiComponent;
  let fixture: ComponentFixture<FindADogUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindADogUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindADogUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
