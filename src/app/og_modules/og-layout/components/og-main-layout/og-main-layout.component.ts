import { Component, OnInit } from '@angular/core';

import { OgCartService } from '../../../../og_services/og-cart/og-cart.service';
import { OgProduct } from '../../../../og_services/og-cart/entities/og-product';

@Component({
  selector: 'og-main-layout',
  templateUrl: './og-main-layout.component.html',
  styleUrls: [ './og-main-layout.component.css' ]
})
export class OgMainLayoutComponent implements OnInit
{
  public cartProdcutDetails;
  public cartItemsCount = 0;
  constructor (public ogCartServ: OgCartService) 
  {
    this.ogCartServ.cartSubject.subscribe(this.updateSubscriberDataHandler.bind(this))

  }
  
  ngOnInit ()
  {
  }

  public updateSubscriberDataHandler (_data)
  {
    this.cartProdcutDetails = _data;
    this.cartItemsCount = Object.keys(this.cartProdcutDetails).length;
    console.log(this.cartProdcutDetails);
  }
  public getItemCount ()
  {
    console.log(this.cartItemsCount)
    return this.cartItemsCount;
  }

}
