import { Component, OnInit } from '@angular/core';
import { OgCartService } from '../../og_services/og-cart/og-cart.service';
import { OgProductComponent } from '../og-product/og-product.component';

@Component({
  selector: 'og-cart-nav',
  templateUrl: './og-cart-nav.component.html',
  styleUrls: [ './og-cart-nav.component.css' ]
})
export class OgCartNavComponent implements OnInit
{
  public cartProducts;
  public cartProductKeys = [];
  constructor (public ogCartService: OgCartService) 
  {
    this.ogCartService.cartSubject.subscribe(this.updateSubscriberDataHandler.bind(this));
  }

  public updateSubscriberDataHandler (_data)
  {
    this.cartProducts = _data;

    for (let key in this.cartProducts)
    {
      if (key != "cartMetaData")
        this.cartProductKeys.push(key);
    }
    console.log(this.cartProducts);
  }

  ngOnInit ()
  {

  }



}
