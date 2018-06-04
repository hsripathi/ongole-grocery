import {HttpParams} from '@angular/common/http';

/* This class is CS version of HttpParams class .*/
export class CSHttpParams
{
    private params = new HttpParams() ;
    
    /*Sets the param to the HttpParams.*/
    public setParam(_key,_value)
    {
        this.params= this.params.set(_key,_value);
    }

    /*Sets the param to the HttpParams.*/
    public deleteParam(_key,_value)
    {
        this.params= this.params.delete(_key,_value);
    }

   /*Gets the HttpParams.*/
    public getHttpParams():HttpParams
    {
        return this.params;
    }

    /**
     * Appends the param to the HttpParams.
     * 
     * @param _key query param key
     * @param _value query param value to be appended
     */
    public appendParam(_key, _value) {
        this.params = this.params.append(_key, _value);
    }
}