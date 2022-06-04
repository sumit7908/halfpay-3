import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSignupService } from 'src/app/service/login-signup.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private login: LoginSignupService,
    private router: Router) { }

  ngOnInit(): void {
    this.login.logOut();
    this.router.navigate(['sign-in']);
  }

}
