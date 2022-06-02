import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
   /*-----Google pay--------*/ 

   paymentRequest:google.payments.api.PaymentDataRequest={
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods:[
      {
        type: 'CARD',
        parameters:{
          allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
          allowedCardNetworks:['AMEX','VISA','MASTERCARD']
        },
        tokenizationSpecification:{
          type:'PAYMENT_GATEWAY',
          parameters:{
            gateway:'example',
            gatewayMerchantId: 'examplegatewayMarchantId'
          }
        }

      }
    ],
    merchantInfo:{
      merchantId:'12345678901234567890',
      merchantName:'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '0.10',
      currencyCode: 'INR',
      countryCode: 'BE'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  };
  onLoadPaymentData = (
    event: Event
  ): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }
  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
    paymentData
    ) => {
      console.log('payment authorized', paymentData);
      return {
        transactionState: 'SUCCESS'
      };
    }
    onError = (event: ErrorEvent): void => {
      console.error('error', event.error);
    }

}
