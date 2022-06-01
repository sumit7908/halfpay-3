import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceEPlanComponent } from './advance-eplan.component';

describe('AdvanceEPlanComponent', () => {
  let component: AdvanceEPlanComponent;
  let fixture: ComponentFixture<AdvanceEPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceEPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceEPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
