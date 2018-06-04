import { Injectable } from '@angular/core';
import { OGHttpclientService } from '../og-httpclient/og-httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class OgGroceryService
{
  customersURL = '/assets/og_model/og-grocery-category.json';


  constructor (public ogHttpClient: OGHttpclientService) { }

  public getGrocery (_callbackHandler)
  {
    this.ogHttpClient.getObservable(this.customersURL, null)
      .subscribe((_data) =>
      {
        this.ogHttpClient.successCallback(_data);
        _callbackHandler(_data);
      }, this.ogHttpClient.errorCallback);
  }
}
