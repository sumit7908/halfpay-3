import { Component, OnInit } from '@angular/core';
import { PaySService } from '../../../service/pay-s.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-basic-eplan',
  templateUrl: './basic-eplan.component.html',
  styleUrls: ['./basic-eplan.component.css']
})
export class BasicEPlanComponent implements OnInit {
  planCost = "99";
  transactionType = "authCaptureTransaction";
  showMsg: boolean = false;
  alertType: boolean = false;
  responseDescription: any;

  constructor(private payService: PaySService) { }

  ngOnInit() {
  }

  pay(value: any) {
    value = {
      "createTransactionRequest": {
        "merchantAuthentication": {
          "name": environment.apiLoginID,
          "transactionKey": environment.transactionKey
        },
        "transactionRequest": {
          "transactionType": this.transactionType,
          "amount": this.planCost,
          "payment": {
            "bankAccount": {
              "accountType": value.accountType,
              "routingNumber": value.routingNumber,
              "accountNumber": value.accountNumber,
              "nameOnAccount": value.nameOnAccount,
              "bankName": value.bankName,
              "checkNumber": value.checkNumber
            }
          },
          "billTo": {
            "firstName": value.firstName,
            "lastName": value.lastName,
            "address": value.address,
            "city": value.city,
            "state": value.state,
            "zip": value.zipCode,
            "country": value.country,
            "phoneNumber": value.phone,
            "email": value.email
          }
        }
      }
    }

    this.payService.redirectPay(value).subscribe((response) => {
      this.showMsg = true;
      this.responseDescription = response;
      if (this.responseDescription.messages.resultCode === "Ok") {
        this.alertType = true;
        this.responseDescription = "The transaction completed successfully. Have a nice day!";
      } else {
        this.responseDescription = "The transaction failed. Please try again after some time. Check with the bank for more details";
      }
    });

    this.alertType = false;
  }
}
