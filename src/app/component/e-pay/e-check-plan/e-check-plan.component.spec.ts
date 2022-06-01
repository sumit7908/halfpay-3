import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECheckPlanComponent } from './e-check-plan.component';

describe('ECheckPlanComponent', () => {
  let component: ECheckPlanComponent;
  let fixture: ComponentFixture<ECheckPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECheckPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECheckPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
