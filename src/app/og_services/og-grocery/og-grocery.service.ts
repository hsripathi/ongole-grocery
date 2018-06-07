import { Injectable } from '@angular/core';
import { OGHttpclientService } from '../og-httpclient/og-httpclient.service';
import { OgRequestOptions } from '../og-httpclient/og-request-options';
import { OG_SERVICES_URI } from '../../og_conf/og-services-conf';


@Injectable({
  providedIn: 'root'
})
export class OgGroceryService
{
  constructor (public ogHttpClient: OGHttpclientService) { }

  public getGrocery (_callbackHandler)
  {
    this.ogHttpClient.getObservable(OG_SERVICES_URI.getURL("getGroceryCategroy"), null)
      .subscribe((_data) =>
      {
        this.ogHttpClient.successCallback(_data);
        _callbackHandler(_data);
      }, this.ogHttpClient.errorCallback);
  }

  public getGroceryCategory (_categoryName, _callbackHandler)
  {
    let endPoint = OG_SERVICES_URI.getURL("getGroceryCategroy") + "/" + _categoryName;
    /*var reqOptions = new OgRequestOptions();
    reqOptions.appendHttpParam
    setHttpParam("category_name", _categoryName);*/

    this.ogHttpClient.getObservable(endPoint, null)
      .subscribe((_data) =>
      {
        this.ogHttpClient.successCallback(_data);
        _callbackHandler(_data);
      }, this.ogHttpClient.errorCallback);
  }
}
