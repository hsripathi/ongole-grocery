import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { OgGroceryService } from '../../../../og_services/og-grocery/og-grocery.service';
import { OG_SERVICES_URI } from '../../../../og_conf/og-services-conf';

@Component({
  selector: 'app-og-category-details',
  templateUrl: './og-category-details.component.html',
  styleUrls: [ './og-category-details.component.css' ]
})
export class OgCategoryDetailsComponent implements OnInit
{
  public breadCrumbData = new Array();
  public activeCategoryProducts = new Array();
  private activeCategoryName;
  private dummyProducts = [ 1, 2, 3, 4, 5, 6, 8, 123, 2312, 123123, 12321312, 12 ];

  constructor (private route: ActivatedRoute, private ogGroceryService: OgGroceryService)
  { }

  ngOnInit ()
  {
    this.route.paramMap.subscribe(data =>
    {
      this.activeCategoryName = data[ "params" ].categoryName;
      this.breadCrumbData.push({ key: this.activeCategoryName, title: this.activeCategoryName });

      this.ogGroceryService.getGroceryCategory(this.activeCategoryName, this.getGroceryCallbackHandler.bind(this));
    });
  }

  public getGroceryCallbackHandler (_data)
  {
    console.log(_data)
    this.activeCategoryProducts = _data;
  }
}
