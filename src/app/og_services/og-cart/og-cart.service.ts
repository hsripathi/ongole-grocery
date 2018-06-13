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

  constructor () 
  {
    this.productList[ "cartMetaData" ] = {
      "totalAmount": 0,
      "totalItemsCount": 0
    };
  }

  addProductToCart (_product: OgProduct)
  {
    var product = this.productList[ _product[ "_id" ] ];

    if (product != undefined)
    {
      var productQuantity = parseInt(product[ "quantity" ]) + 1;
      _product[ "quantity" ] = productQuantity;
      this.productList[ _product[ "_id" ] ][ "quantity" ] = productQuantity;
    } else
    {
      this.productList[ _product[ "_id" ] ] = _product;
    }
    this.cartSubject.next(this.productList);

    this.productList[ "cartMetaData" ][ "totalItemsCount" ] = this.productList[ "cartMetaData" ][ "totalItemsCount" ] + 1;
  }

  removeProductFromCart (_product: OgProduct)
  {
    var product = this.productList[ _product[ "_id" ] ];

    if (product != undefined)
    {
      var productQuantity = parseInt(product[ "quantity" ]) - 1;
      _product[ "quantity" ] = productQuantity;
      this.productList[ _product[ "_id" ] ][ "quantity" ] = productQuantity;
      this.cartSubject.next(this.productList);
    }
  }

  public getCartProductList ()
  {
    return this.productList;
  }
}
