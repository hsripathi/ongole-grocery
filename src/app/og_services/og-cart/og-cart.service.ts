import { Injectable } from '@angular/core';
import { OgProduct } from './entities/og-product';
import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class OgCartService 
{
  private productList = new Object();
  public cartSubject = new Subject<any>();
  constructor () { }

  addProductToCart (_product: OgProduct)
  {
    var product = this.productList[ _product[ "id" ] ];

    if (product != undefined)
    {
      var productQuantity = productQuantity = parseInt(product[ "quantity" ]);


      // product[ "quantity" ] = productQuantity + 1;

      _product[ "quantity" ] = productQuantity + 1;
    } else
    {
      this.productList[ _product[ "id" ] ] = _product;
    }
    this.cartSubject.next(this.productList);
  }

  removeProductFromCart (_product: OgProduct)
  {

  }

  public getCartProductList ()
  {
    return this.productList;
  }
}
