import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup;
  userProfile = false;
  user_id: number;
  user_data;
  user_updated_data;
  user_dto: User;

  //data not available on form
  // upload_file_name;
  user_profile_pic;
  user_language;
  user_role;


  constructor(private formBuilder: FormBuilder, private router: Router, private user_service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.user_id = Number(sessionStorage.getItem('user_session_id'));
    this.userProfileForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobNumber: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      addLine1: ['', Validators.required],
      addLine2: [],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      gender: ['', Validators.required],
      aboutYou: ['', Validators.required],
      uploadPhoto: [],
    })
    this.editUserData(this.user_id);
  }

  get rf() { return this.userProfileForm.controls; }

  editUserData(user_id) {
    this.user_service.getUserData(user_id).subscribe(data => {
      this.user_data = data;
      this.user_profile_pic = this.user_data.uploadPhoto;
      this.user_language = this.user_data.language;
      this.user_role = this.user_data.role;
      this.userProfileForm.setValue({
        name: this.user_data.name,
        mobNumber: this.user_data.mobNumber,
        age: this.user_data.age,
        dob: this.user_data.dob,
        email: this.user_data.email,
        password: this.user_data.password,
        addLine1: this.user_data.address.addLine1,
        addLine2: this.user_data.address.addLine2,
        city: this.user_data.address.city,
        state: this.user_data.address.state,
        zipCode: this.user_data.address.zipCode,
        gender: this.user_data.gender,
        aboutYou: this.user_data.aboutYou,
        uploadPhoto: '',
      })
    }, error => {
      console.log("My error", error);
    })
  }

  updateProfile() {
    this.userProfile = true;
    if (this.userProfileForm.invalid) {
      this.toastr.error('Some Error Occured!', 'User Profile!');
      return;
    }
    this.user_updated_data = this.userProfileForm.value;
    this.user_dto = {
      firstName: this.user_updated_data.fname,
      lastName: this.user_updated_data.lname,

      mob_no: this.user_updated_data.mobNumber,
      email: this.user_updated_data.email,
      password: this.user_updated_data.password,
        address: this.user_updated_data.addLine1,
        city: this.user_updated_data.city,
        state: this.user_updated_data.state,

        country: this.user_updated_data.country,
        pin: this.user_updated_data.zipCode,
      
    }
    this.user_service.updateUserData(this.user_id, this.user_dto).subscribe(data => {
      this.toastr.success('Profile Updated Successfully!', 'User Profile!');

     
    }, err => {
      this.toastr.error('Some Error Occured!', 'User Profile!');
    })
  }

}
