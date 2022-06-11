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
    //update the ui
    this.categorySelected = event.target.value;
    console.log(this.categorySelected)
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
    if(this.searchTerm == null && this.categorySelected == null){
      this.locationSearch();
    }
    else if(this.searchTerm == null && this.location){
      this.category();
    }
    else if(this.categorySelected==null && this.location==null){
      this.search();
    }
    else if (this.searchTerm == null){
      this.locationCategory();
    }
    else if (this.categorySelected == null){
      this.productService.searchAndLocation(this.searchTerm,this.location)
      .subscribe((data : {} ) => {
      this.data = data;
      })
    }
    else if (this.location==null){
      this.productService.searchAndCategory(this.searchTerm,this.categorySelected)
      .subscribe((data : {} ) => {
      this.data = data;
      })
    }
    else{
      this.productService.advancedSearch(this.searchTerm,this.categorySelected,this.location)
      .subscribe((data : {} ) => {
      this.data = data;
      })
    }
  }

}

