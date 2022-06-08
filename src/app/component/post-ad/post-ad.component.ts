import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { LoginSignupService } from 'src/app/service/login-signup.service';
import { ProductService } from 'src/app/service/product.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.scss']
})
export class PostAdComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  user_id;
  href: String = '';
  product_dto: Product;
  productData;

  signInFormValue: any = {};
  invalidLogin: boolean;

  productsubmitted = false;
  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, 
    private product_service: ProductService, private http: HttpClient, private login: LoginSignupService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
     
      category: ['', Validators.required],     
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
      productImage: [],
     

    })


   
  }


  
  onProductSubmit(){
  
    
      
     
    this.productData = this.productForm.value;
    this.productData.uploadPhoto = this.selectedFile;
    this.product_dto = {
      
     
      title: this.productData.title,
      category: this.productData.category,
      price: this.productData.price,
      description: this.productData.description,
      name: this.productData.name,
      email: this.productData.email,
      phone: this.productData.phone,
      country: this.productData.country,
      
      state: this.productData.state,
      city: this.productData.city,
     
      pin: this.productData.pin,
      status: true,
      
      time: this.productData.time,
      duration: this.productData.duration,
      
      user_id: this.login.user_id,
      productImage: this.productData.productImage
      
    }
    
    console.log(this.product_dto)
    
    this.product_service.addNewProduct(this.product_dto).subscribe(data => {
  
      alert("Success");
      this.router.navigateByUrl('/products');
    }, err => {
      alert("Some Error Occured");
    })
  }
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  get rf() { 
    return this.productForm.controls; 
  }

}