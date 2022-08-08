import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDogsUiComponent } from './my-dogs-ui.component';

describe('MyDogsUiComponent', () => {
  let component: MyDogsUiComponent;
  let fixture: ComponentFixture<MyDogsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDogsUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDogsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
