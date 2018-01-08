import { Component } from "@angular/core";

import * as purchase from "nativescript-purchase";
import { Transaction, TransactionState } from "nativescript-purchase/transaction";
import { Product } from "nativescript-purchase/product";

@Component({
  selector: "my-app",
  templateUrl:"./app.component.html"
})
export class AppComponent {
  // Your TypeScript logic goes here

  getData(){
    purchase.getProducts().then(res =>{
      console.log(res);
    })
  }
}
