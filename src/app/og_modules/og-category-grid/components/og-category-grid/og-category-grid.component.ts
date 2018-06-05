import { Component, OnInit } from '@angular/core';
import { OgGroceryService } from '../../../../og_services/og-grocery/og-grocery.service';
import { OG_SERVICES_URI } from '../../../../og_conf/og-services-conf';

@Component({
  selector: 'og-category-grid',
  templateUrl: './og-category-grid.component.html',
  styleUrls: [ './og-category-grid.component.css' ]
})
export class OgCategoryGridComponent implements OnInit
{
  public ogGroceryCategory = new Array();
  constructor (public ogGroceryService: OgGroceryService) { }

  ngOnInit ()
  {
    this.ogGroceryService.getGrocery(OG_SERVICES_URI.getURL("getGroceryCategroy"), this.callbackHandler.bind(this));
  }

  public callbackHandler (_data)
  {
    this.ogGroceryCategory = _data;
  }



}
