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


  constructor (private route: ActivatedRoute, private ogGroceryService: OgGroceryService)
  { }

  ngOnInit ()
  {
    this.route.paramMap.subscribe(data =>
    {
      let activeCategory = data[ "params" ].categoryName;
      this.breadCrumbData.push({ key: activeCategory, title: activeCategory });

      this.ogGroceryService.getGroceryCategory(activeCategory, this.getGroceryCallbackHandler.bind(this));
    });
  }

  public getGroceryCallbackHandler (_data)
  {
    console.log(_data)
    this.activeCategoryProducts = _data;
  }
}
