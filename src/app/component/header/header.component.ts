import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoginSignupService } from 'src/app/service/login-signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged_in: Boolean = false;
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService, private router: Router, public loginService:LoginSignupService) { }

  ngOnInit(): void {
   
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }



}
