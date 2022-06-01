import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-check-plan',
  templateUrl: './e-check-plan.component.html',
  styleUrls: ['./e-check-plan.component.css']
})
export class ECheckPlanComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToPolicy() {
    this.route.navigateByUrl("policy");
  }

  goToEPay() {
    this.route.navigateByUrl("eCheck");
  }

}
