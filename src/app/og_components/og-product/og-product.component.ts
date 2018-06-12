import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { OgGroceryService } from '../../og_services/og-grocery/og-grocery.service';
import { OG_SERVICES_URI } from '../../og_conf/og-services-conf';
import { OG_LABEL_RESOURCES } from '../../og_conf/og-label-resources';;
import { OgCartService } from '../../og_services/og-cart/og-cart.service';
import { OgProduct } from '../../og_services/og-cart/entities/og-product';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'og-product',
  templateUrl: './og-product.component.html',
  styleUrls: [ './og-product.component.css' ]
})
export class OgProductComponent implements OnInit
{
  private enableAddToCart = true;
  constructor (private ogGroceryService: OgGroceryService, public ogCartService: OgCartService) { }

  ngOnInit ()
  {
  }

  public addToCart (_product)
  {
    this.enableAddToCart = false;

    let cartProduct = new OgProduct();
    cartProduct.setProductId(_product[ "_id" ]);
    cartProduct.setProductName(_product[ "name" ]);
    cartProduct.setProductPrice("10");
    cartProduct.setProductQuantity("1");

    if (_product[ "quantity" ] == undefined)
    {
      _product[ "quantity" ] = 1;
    }


    this.ogCartService.addProductToCart(_product);
  }

  @Input() product: string;

}
