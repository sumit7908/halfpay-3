import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public totalItem : number = 0;
  public productList : any ;
  public filterCategory : any
  searchTerm : string;
  searchKey:string ="";
  categorySelected;
  data: any =[];
  location;
  filterSelected;
  sending;
  constructor(private api : ApiService, private cartService : CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
 
    this.productService.allProduct()
    .subscribe( (res) => {
        this.data = res;
        this.productList = res;
        this.productList.forEach((a:any) => {
          
        }
        )
    })

    

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category){

    this.productService.getByCategory(category)
    .subscribe((data : {} ) => {
      this.data = data;
    }) 

    
  }
  getAll(){

    this.productService.allProduct()
    .subscribe( (res) => {
        this.data = res;
        this.productList = res;
        this.productList.forEach((a:any) => {
          
        }
        )
    })

    
  }

  selectCategory (event: any) {
    this.categorySelected = event.target.value;
    console.log(this.categorySelected)
  }

  selectFilter (event: any) {
    this.filterSelected = event.target.value;
  }

  filtering(){
    console.log(this.filterSelected)
    if (this.filterSelected == 'low')
    { 
      this.productService.filtering('asc')
      .subscribe((data : {} ) => {
        this.data = data;
      })
    }
    else if (this.filterSelected == 'high')
    { 
      this.productService.filtering('desc')
      .subscribe((data : {} ) => {
        this.data = data;
      })
    }

    else{
      this.productService.allProduct()
    .subscribe( (res) => {
        this.data = res;
        this.productList = res;
      
    })
    }
  }

  category(){
    this.productService.getByCategory(this.categorySelected)
    .subscribe((data : {} ) => {
      this.data = data;
    })

  }

  locationSearch(){
    this.productService.getByLocation(this.location)
    .subscribe((data : {} ) => {
      this.data = data;
    })
  }



  locationCategory(){
    this.productService.getByLocationCategory(this.location,this.categorySelected)
    .subscribe((data : {} ) => {
      this.data = data;
    })
  }

  search(){
    this.productService.search(this.searchTerm,this.searchTerm)
    .subscribe((data : {} ) => {
      this.data = data;
    })
  }

  advancedSearch(){
    console.log(this.searchTerm)
    console.log(this.categorySelected)
    console.log(this.location)
    if((this.searchTerm == null || this.searchTerm=="") && (this.categorySelected == null || this.categorySelected == "Category")){
      console.log("this.locationSearch()")
      this.locationSearch();
    }
    else if((this.searchTerm == null || this.searchTerm=="") && (this.location==null || this.location=="")){
      console.log("category()")

      this.category();
    }
    else if((this.categorySelected==null || this.categorySelected == "Category") && (this.location==null || this.location=="")){
      console.log("search()")
      this.search();
    }
    else if (this.searchTerm == null || this.searchTerm==""){
      console.log("locationCategory()")
      this.locationCategory();
    }
    else if (this.categorySelected == null || this.categorySelected == "Category"){
      console.log("searchLocation")
      this.productService.searchAndLocation(this.searchTerm,this.location)
      .subscribe((data : {} ) => {
        console.log(data);
      this.data = data;
      })
    }
    else if (this.location==null || this.location==""){
      console.log("searchCategory")

      this.productService.searchAndCategory(this.searchTerm,this.categorySelected)
      .subscribe((data : {} ) => {
      this.data = data;
      })
    }
    else if(this.location != null || this.location != "" && this.categorySelected != null || 
    this.categorySelected != "Category" && this.searchTerm != null || this.searchTerm==""){
      console.log("all");
      this.productService.advancedSearch(this.searchTerm,this.categorySelected,this.location)
      .subscribe((data : {} ) => {
      this.data = data;
      })
    }
  }

}

