import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {CSHttpHeaders} from './cs-httpheaders';
import {CSHttpParams} from './cs-httpparams';

/* This is a wrapper class for HTTP Request options */
export class CsRequestOptions
{
    private requestOptions ={};
    private httpHeaders = new CSHttpHeaders();
    private httpParams = new CSHttpParams();

    /*Sets the header to the HTTPHeaders.*/
    public setHttpHeader(_key,_value)
    {
       this.httpHeaders.setHeader(_key,_value);
    }

    /*Sets the query param to the HTTPParams.*/
    public setHttpParam(_key,_value)
    {
       this.httpParams.setParam(_key,_value);
    }

    /*Sets the query param to the HTTPParams.*/
    public deleteHttpParam(_key,_value)
    {
       this.httpParams.deleteParam(_key,_value);
    }

    /*Gets the request optiosn.*/
    public getOptions():any
    {
        this.requestOptions["headers"] = this.httpHeaders.getHttpHeaders();
        this.requestOptions["params"] = this.httpParams.getHttpParams();;
        return this.requestOptions;
    }

    /**
     * Sets the query param to the HTTPParams.
     * 
     * @param _key query param key
     * @param _value query param value to be appended
     */
    public appendHttpParam(_key, _value) {
        this.httpParams.appendParam(_key, _value);
    }
    
}
