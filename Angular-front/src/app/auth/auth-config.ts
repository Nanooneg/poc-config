import {environment} from '../../environments/environment';
import {AuthConfig} from 'angular-oauth2-oidc';

// destructuration
export const authConfig: AuthConfig = {
  ...environment.keycloak
};

export class OAuthModuleConfig {
  resourceServer: OAuthResourceServerConfig = {sendAccessToken: true};
}

export class OAuthResourceServerConfig {
  /**
   * Urls for which calls should be intercepted.
   * If there is an ResourceServerErrorHandler registered, it is used for them.
   * If sendAccessToken is set to true, the access_token is send to them too.
   */
  allowedUrls?: Array<string>;
  sendAccessToken = true;
  customUrlValidation?: (url: string) => boolean;
}
