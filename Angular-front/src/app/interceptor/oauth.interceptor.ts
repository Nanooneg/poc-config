import {Injectable, Optional} from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Observable, of, merge} from 'rxjs';
import {
  catchError,
  filter,
  map,
  take,
  mergeMap,
  timeout
} from 'rxjs/operators';
import {OAuthModuleConfig, OAuthResourceServerErrorHandler, OAuthService, OAuthStorage} from 'angular-oauth2-oidc';

@Injectable()
export class OauthInterceptor implements HttpInterceptor {
  constructor(
    private authStorage: OAuthStorage,
    private oAuthService: OAuthService,
    private errorHandler: OAuthResourceServerErrorHandler,
    @Optional() private moduleConfig: OAuthModuleConfig
  ) {
  }

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = req.url.toLowerCase();

    const sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;

    if (!sendAccessToken) {
      return next
        .handle(req)
        .pipe(catchError(err => this.errorHandler.handleError(err)));
    }

    return merge(
      of(this.oAuthService.getAccessToken()).pipe(
        filter(token => (!!token))
      ),
      this.oAuthService.events.pipe(
        filter(e => e.type === 'token_received'),
        timeout(this.oAuthService.waitForTokenInMsec || 0),
        catchError(_ => of(null)), // timeout is not an error
        map(_ => this.oAuthService.getAccessToken())
      )
    ).pipe(
      take(1),
      mergeMap(token => {
        if (token) {
          const header = 'Bearer ' + token;
          const headers = req.headers.set('Authorization', header);
          req = req.clone({headers});
        }

        return next
          .handle(req)
          .pipe(catchError(err => this.errorHandler.handleError(err)));
      })
    );
  }
}
