import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalEPlanComponent } from './professional-eplan.component';

describe('ProfessionalEPlanComponent', () => {
  let component: ProfessionalEPlanComponent;
  let fixture: ComponentFixture<ProfessionalEPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalEPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalEPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
