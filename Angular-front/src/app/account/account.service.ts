import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {ResultModel} from './Result.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {

  }

  public getPublic(): Observable<any>  {
    return this.httpClient.get<ResultModel>(environment.endpointUrl.test.getPublic).pipe(map(httpResponse => httpResponse));
  }

  public getAdmin(): Observable<any>  {
    return this.httpClient.get<ResultModel>(environment.endpointUrl.test.getAdmin).pipe(map(httpResponse => httpResponse));
  }

  public getUser(): Observable<any>  {
    return this.httpClient.get<ResultModel>(environment.endpointUrl.test.getAdminOrUSer).pipe(map(httpResponse => httpResponse));
  }

}
