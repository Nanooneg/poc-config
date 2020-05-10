import {Component} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-front';


  constructor(private oAuthService: OAuthService) {
  }

  onLogout() {
    this.oAuthService.logOut();
  }
}
