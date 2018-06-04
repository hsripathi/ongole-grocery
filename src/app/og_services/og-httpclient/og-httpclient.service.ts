import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { CsBlockuiService } from '../block-ui/cs-blockui.service';

/* This service is a CS version of HttpClient service,which performs the HTTP requests.
* ALl components should use this service to interact with the server.
*/
@Injectable()
export class OGHttpclientService
{
  constructor (private httpClient: HttpClient/*, private csblockUIService: CsBlockuiService*/) 
  {
  }

  /* Gets the Observable for the given endPoint. Calling method use this Observable to subscribe the request */
  public getObservable (_endPoint, _requestOptions): Observable<Object>
  {
    this.beforeRequestCall();

    if (_requestOptions == null)
    {
      return this.httpClient.get(_endPoint);
    }
    return this.httpClient.get(_endPoint, _requestOptions);
  }

  /* Gets the Observable for the given endPoint. Calling method use this Observable to subscribe the request */
  public postObservable (_endPoint, _body, _requestOptions): Observable<Object>
  {
    this.beforeRequestCall();

    if (_requestOptions == null)
    {
      return this.httpClient.post(_endPoint, _body);
    }

    return this.httpClient.post(_endPoint, _body, _requestOptions);
  }

  /* Invokes before the HTTP Request*/
  public beforeRequestCall ()
  {
    //this.csblockUIService.blockUI();
  }

  /* Invokes after the HTTP Request*/
  public afterRequestCall (_data)
  {
    // this.csblockUIService.unblockUI();
  }

  /* Call back handler for http success*/
  public successCallback (_data)
  {
    //this.csblockUIService.unblockUI();
  }

  /* Call back handler for http Error*/
  public errorCallback (_data)
  {
    let globalErr = document.getElementById("global-error");

    if (globalErr != undefined)
    {
      globalErr.classList.add("active");
      let errorCont = globalErr.getElementsByClassName("server-message");

      if (errorCont != null && errorCont.length > 0)
      {
        let errorMsg = _data.message;
        if (errorMsg == undefined)
          errorMsg = _data.status + " : " + _data.statusText;
        errorCont[ 0 ].innerHTML = errorMsg;
      }
    }

    //this.afterRequestCall(_data);
  }
}