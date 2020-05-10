import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

interface Payload {
  realm_access: {
    roles: string[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private authService: OAuthService) {}

  get isLogged(): boolean {
    console.log('isLogged');
    return this.authService.hasValidIdToken() && this.authService.hasValidAccessToken();
  }

  get token(): string {
    console.log(this.authService.getAccessToken());
    return this.authService.getAccessToken();
  }

  get payload(): Payload {
    if (this.isLogged && this.token) {
      try {
        console.log('parsing token...');
        return JSON.parse(atob(this.token.split('.')[1]));
      } catch (e) {
        console.error('Cannot parse token payload');
        return null;
      }
    }
    return null;
  }

  get roles(): string[] {
    const { payload } = this;

    if (!Array.isArray(payload && payload.realm_access && payload.realm_access.roles)) {
      return [];
    }
    return payload.realm_access.roles;
  }
}
