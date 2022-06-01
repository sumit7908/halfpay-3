import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginSignupService } from 'src/app/service/login-signup.service';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss']
})
export class SigninSignupComponent implements OnInit {

  regForm: Boolean = false;
  signUpform: FormGroup;
  signInform: FormGroup;
  signUpsubmitted = false;
  href: String = '';
  user_data;
  user_dto: User;
  user_reg_data;

  signInFormValue: any = {};

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private logsign_service: LoginSignupService, private http: HttpClient) { }

  ngOnInit() {
    this.href = this.router.url;
    if (this.href == '/sign-up') {
      this.regForm = true;
    } else if (this.href == '/sign-in') {
      this.regForm = false;
    }

    this.signUpform = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: [],
      mobNumber: ['', Validators.required],     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
     

    })

    this.signInform = this.formBuilder.group({

    })
  }

  get rf() { 
    return this.signUpform.controls; 
  }

  onSubmitSignUp() {
    this.signUpsubmitted = true;
    if (this.signUpform.invalid) {
      return;
    }
 
    this.user_reg_data = this.signUpform.value;
    this.user_dto = {
    
      email: this.user_reg_data.email,
    
        address: this.user_reg_data.address,
        city: this.user_reg_data.city,
        state: this.user_reg_data.state,

        country: this.user_reg_data.country,
        pin: this.user_reg_data.zipCode,
      
        mob_no: this.user_reg_data.mobNumber,
        firstName: this.user_reg_data.fname,
        lastName: this.user_reg_data.lname,

      password: this.user_reg_data.password,
     
    }
    this.logsign_service.registeruser(this.user_dto).subscribe(data => {
      alert("Success");
      this.router.navigateByUrl('/sign-in');
    }, err => {
      alert("Some Error Occured");
    })
  }

  onSubmitSignIn() {
    const json = '{ "name": "Foo", "description": "Bar" }';
    const parsed = JSON.parse(json);
    console.log("Type :", typeof (parsed));

    this.logsign_service.authLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword)
    .subscribe(data => {
      this.user_data = data;
      if (this.user_data != null) {
        /**if (this.user_data[0].role == "seller") {
          sessionStorage.setItem("user_session_id", this.user_data[0].id);
          sessionStorage.setItem("role", this.user_data[0].role);
          this.router.navigateByUrl('/seller-dashboard');
        } else if (this.user_data[0].role == "buyer") {
          sessionStorage.setItem("user_session_id", this.user_data[0].id);
          sessionStorage.setItem("role", this.user_data[0].role);
          this.router.navigateByUrl('/buyer-dashboard');
        } else {
          alert("Invalid-user-role")
        }**/
        alert("Success")
      } else {
        alert("Invalid")
      }
      console.log(this.user_data);

    }, error => {
      console.log("My error", error);
    })
  }

}
