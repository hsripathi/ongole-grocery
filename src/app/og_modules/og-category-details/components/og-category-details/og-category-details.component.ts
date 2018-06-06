import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-og-category-details',
  templateUrl: './og-category-details.component.html',
  styleUrls: [ './og-category-details.component.css' ]
})
export class OgCategoryDetailsComponent implements OnInit
{
  public breadCrumbData = new Array();

  constructor (private route: ActivatedRoute)
  { }

  ngOnInit ()
  {
    this.route.paramMap.subscribe(data =>
    {
      //this.breadCrumbData.push(data[ "params" ].categoryName);
      this.breadCrumbData.push({ key: data[ "params" ].categoryName, title: data[ "params" ].categoryName })
    });
  }

}
