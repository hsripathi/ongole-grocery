import { Component, OnInit } from '@angular/core';
import { OgGroceryService } from '../../../../og_services/og-grocery/og-grocery.service';

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
    this.ogGroceryService.getGrocery(this.callbackHandler.bind(this));
  }

  public callbackHandler (_data)
  {
    for (var key in _data)
    {
      if (_data.hasOwnProperty(key))
      {
        this.ogGroceryCategory.push(_data[ key ])
      }
    }
  }



}
