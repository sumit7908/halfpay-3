import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {

  

  constructor( public router : ActivatedRoute, private productService : ProductService,private api : ApiService, private cartService : CartService) { }

  id = this.router.snapshot.params['prod-id'];
  productDetails: any = {};
  searchKey:string ="";
  ngOnInit(): void {

    this.productService.singleProduct(this.id)
    .subscribe((data : {} ) => {
      this.productDetails = data;
    })
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
