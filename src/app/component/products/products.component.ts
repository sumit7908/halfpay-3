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
  public searchTerm !: string;
  searchKey:string ="";
  data: any =[];
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
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
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

}
function search(event: Event, any: any) {
  throw new Error('Function not implemented.');
}

