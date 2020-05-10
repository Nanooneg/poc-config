import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OauthInterceptor} from './interceptor/oauth.interceptor';
import {AuthInitializer} from './auth-initializer';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:9001'],
        sendAccessToken: true
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OauthInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory(authInitializer: AuthInitializer) {
        return () => authInitializer.init();
      },
      deps: [AuthInitializer],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
