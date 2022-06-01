import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessEPlanComponent } from './business-eplan.component';

describe('BusinessEPlanComponent', () => {
  let component: BusinessEPlanComponent;
  let fixture: ComponentFixture<BusinessEPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessEPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessEPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
