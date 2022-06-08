import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {

  

  constructor( public router : ActivatedRoute, private productService : ProductService) { }

  id = this.router.snapshot.params['prod-id'];
  productDetails: any = {};
  ngOnInit(): void {

    this.productService.singleProduct(this.id)
    .subscribe((data : {} ) => {
      this.productDetails = data;
    })

  }

}
