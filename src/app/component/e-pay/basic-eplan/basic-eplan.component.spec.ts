import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEPlanComponent } from './basic-eplan.component';

describe('BasicEPlanComponent', () => {
  let component: BasicEPlanComponent;
  let fixture: ComponentFixture<BasicEPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicEPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
