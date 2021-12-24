import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  sendRequest(requestUrl: string , requestType: string= 'get', requestParams?: any): Observable<any>{
    switch (requestType.toLowerCase()) {
      case 'post':
        this.postData(requestUrl,requestParams)
      break;
      case 'get':
      default:
        return this.getData(requestUrl, requestParams);
      break;
    }
    return of ('Error!');
  }

  private getData(requestUrl: string,  requestParams: {}): Observable<any> {
    if (requestParams) {
      requestParams = this.serialize(requestParams);
      requestUrl = `${requestUrl}?${requestParams}`;
    }
    return this._http.get(requestUrl);
  }

  private postData(requestUrl: string,  requestParams: {}): Observable<any> {
    return this._http.post(requestUrl, requestParams);
  }

  private serialize(object: any) {
    let unserializedStringArr = [];
    for (let prop in object)
      if (object.hasOwnProperty(prop)) {
        unserializedStringArr.push(encodeURIComponent(prop) + "=" + encodeURIComponent(object[prop]));
      }
    return unserializedStringArr.join("&");
  }
}
