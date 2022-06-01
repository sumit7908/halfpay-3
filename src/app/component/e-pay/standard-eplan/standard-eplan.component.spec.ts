import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardEPlanComponent } from './standard-eplan.component';

describe('StandardEPlanComponent', () => {
  let component: StandardEPlanComponent;
  let fixture: ComponentFixture<StandardEPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardEPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardEPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
