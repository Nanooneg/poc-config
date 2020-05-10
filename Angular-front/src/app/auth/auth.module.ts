import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AuthConfig, OAuthModule} from 'angular-oauth2-oidc';
import {AuthConfigService} from './auth-config.service';
import {authConfig, OAuthModuleConfig} from './auth-config';



@NgModule({
  imports: [
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AuthConfigService,
    {
      provide: AuthConfig,
      useValue: authConfig
    },
    OAuthModuleConfig,
  ]
})
export class AuthModule { }
1
