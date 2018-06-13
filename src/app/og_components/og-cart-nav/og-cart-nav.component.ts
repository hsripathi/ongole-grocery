import { Component, OnInit } from '@angular/core';
import { OgCartService } from '../../og_services/og-cart/og-cart.service';

@Component({
  selector: 'og-cart-nav',
  templateUrl: './og-cart-nav.component.html',
  styleUrls: [ './og-cart-nav.component.css' ]
})
export class OgCartNavComponent implements OnInit
{
  public cartProducts;
  constructor (public ogCartService: OgCartService) { }

  ngOnInit ()
  {
    this.cartProducts = this.ogCartService.getCartProductList();
    console.log(this.cartProducts)
  }

}
