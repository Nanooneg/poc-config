import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {

  }

  public getPublic(): Observable<string>  {
    return this.httpClient.get<string>(environment.endpointUrl.test.getPublic).pipe(map(httpResponse => httpResponse));
  }

  public getAdmin(): Observable<string>  {
    return this.httpClient.get<string>(environment.endpointUrl.test.getAdmin).pipe(map(httpResponse => httpResponse));
  }

  public getUser(): Observable<string>  {
    return this.httpClient.get<string>(environment.endpointUrl.test.getAdminOrUSer).pipe(map(httpResponse => httpResponse));
  }

}
