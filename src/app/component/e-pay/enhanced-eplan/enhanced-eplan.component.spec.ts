import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedEPlanComponent } from './enhanced-eplan.component';

describe('EnhancedEPlanComponent', () => {
  let component: EnhancedEPlanComponent;
  let fixture: ComponentFixture<EnhancedEPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnhancedEPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedEPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
