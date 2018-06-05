import { Injectable } from '@angular/core';
import { OGHttpclientService } from '../og-httpclient/og-httpclient.service';


@Injectable({
  providedIn: 'root'
})
export class OgGroceryService
{
  constructor (public ogHttpClient: OGHttpclientService) { }

  public getGrocery (_endPoint, _callbackHandler)
  {
    this.ogHttpClient.getObservable(_endPoint, null)
      .subscribe((_data) =>
      {
        this.ogHttpClient.successCallback(_data);
        _callbackHandler(_data);
      }, this.ogHttpClient.errorCallback);
  }
}
