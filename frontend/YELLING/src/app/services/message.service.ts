import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpDefined } from '../interfaces/http-defined';
import { HttpReqsService } from './http-reqs.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpreqs: HttpReqsService) { }

  public fetchAllYells(): Observable<any> {
    let reqOption: HttpDefined = {
      requestResource: "",
      data: {},
      statusCode: [200]
    };

    return this.httpreqs.sendGetRequest(reqOption);
  }

  public yell(content: string): Observable<any> {
    let reqOption: HttpDefined = {
      requestResource: "yell/",
      data: {
        content: content
      },
      statusCode: [200]
    };

    return this.httpreqs.sendPostRequest(reqOption);
  }
}
