import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { HttpDefined } from '../interfaces/http-defined';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpReqsService {

  public standardReqURL = "http://localhost/sb5-tec/backend/index.php/";

  private reqResource;
  private headers;

  constructor(private http: HttpClient) { }

  public sendPostRequest(reqOption: HttpDefined) {
    this.doSetup(reqOption);

    return this.http.post(this.reqResource, reqOption.data, { headers: this.headers, observe: "response" }).pipe(
      map((response: HttpResponse<Object>) => {
        if (reqOption.statusCode.indexOf(response.status) > -1) {
          return response.body;
        } else {
          return throwError("Unexpected answer: " + response.status + " : " + response.statusText + " : " + response.body);
        }
      }),
      catchError((error: HttpResponse<any>) => {
        return throwError(error);
      })
    );
  }

  public sendGetRequest(reqOption: HttpDefined) {
    this.doSetup(reqOption);

    return this.http.get(this.reqResource, { headers: this.headers, observe: 'response' }).pipe(
      map((response: HttpResponse<Object>) => {
        if (reqOption.statusCode.indexOf(response.status) > -1) {
          return response.body;
        } else {
          return throwError("Unexpected answer: " + response.status + " : " + response.statusText + " : " + response.body);
        }
      }),
      catchError((error: HttpResponse<any>) => {
        return throwError(error);
      })
    );
  }

  public sendPutRequest(reqOption: HttpDefined) { // EXPERIMENTAL
    this.doSetup(reqOption);

    return this.http.put(this.reqResource, reqOption.data, { headers: this.headers, observe: 'response' }).pipe(
      map((response: HttpResponse<Object>) => {
        if (reqOption.statusCode.indexOf(response.status) > -1) {
          return response.body;
        } else {
          return throwError("Unexpected answer: " + response.status + " : " + response.statusText + " : " + response.body);
        }
      }),
      catchError((error: HttpResponse<any>) => {
        return throwError(error);
      })
    );
  }

  public sendDeleteRequest(reqOption: HttpDefined) { // EXPERIMENTAL
    this.doSetup(reqOption);

    return this.http.delete(this.reqResource, { headers: this.headers, observe: 'response' }).pipe(
      map((response: HttpResponse<Object>) => {
        if (reqOption.statusCode.indexOf(response.status) > -1) {
          return response.body;
        } else {
          return throwError("Unexpected answer: " + response.status + " : " + response.statusText + " : " + response.body);
        }
      }),
      catchError((error: HttpResponse<any>) => {
        return throwError(error);
      })
    );
  }

  private doSetup(reqOption: HttpDefined) {
    this.reqResource = this.standardReqURL + reqOption.requestResource;
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
  }
}