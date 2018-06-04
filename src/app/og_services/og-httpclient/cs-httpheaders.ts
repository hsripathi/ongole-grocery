import {HttpHeaders} from '@angular/common/http';

/* This class is CS version of HttpHeaders class .*/
export class CSHttpHeaders
{
    private headers = new HttpHeaders() ;

    /*Sets the header to the HTTPHeaders.*/
    public setHeader(_key,_value)
    {
        this.headers= this.headers.set(_key,_value);
    }

    /*Gets the HTTPHeaders.*/
    public getHttpHeaders():HttpHeaders
    {
        return this.headers;
    }
}