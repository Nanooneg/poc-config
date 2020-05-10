import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root',
})
export class CustomGuard implements CanActivate {

  constructor(private oauthService: OAuthService,
              private tokenService: TokenService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
    const { verification } = route.data;

    // Si l'utilisateur n'est pas connecté => ça ne sert à rien de faire du check de roles
    if ( !this.tokenService.isLogged ) {
      this.oauthService.initLoginFlow(routerStateSnapshot.url);
    }

    switch (verification.type) {
      case 'ALL_ROLES': // no necessary ! TODO remove
        const hasEveryRoles = verification.roles.every((requiredRole) => this.tokenService.roles.includes(requiredRole));
        if (hasEveryRoles){
          return hasEveryRoles;
        } else {
          this.router.navigateByUrl('/unauthorized');
        }
        break;
      case 'SOME_ROLES':
        const hasAnyRole = verification.roles.some((requiredRole) => this.tokenService.roles.includes(requiredRole));
        if (hasAnyRole){
          return hasAnyRole;
        } else {
          this.router.navigateByUrl('/unauthorized');
        }
        break;
      default:
        return false;
    }
  }
}
