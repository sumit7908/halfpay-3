import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEPlanComponent } from './custom-eplan.component';

describe('CustomEPlanComponent', () => {
  let component: CustomEPlanComponent;
  let fixture: ComponentFixture<CustomEPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
