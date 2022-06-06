import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.scss']
})
export class PostAdComponent implements OnInit {

  productsubmitted = false;
  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
     
      catagory: ['', Validators.required],     
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required,]],
      price: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
      address: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      uploadPhoto: [],
     

    })


   
  }
  onProductSubmit(){}

  get rf() { 
    return this.productForm.controls; 
  }

}