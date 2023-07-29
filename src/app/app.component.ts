import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { APP_TITLE, TOOLBAR_PAGES } from './app.constants';
import { DOCUMENT } from '@angular/common';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = APP_TITLE;
  year = new Date().getFullYear();
  constructor(@Inject(DOCUMENT) public document: Document, public authService: AuthService){}

  getToolbarPageRoutes():Route[] {
    return TOOLBAR_PAGES;
  }

  login() {
    this.authService.loginWithRedirect();
  }

  logout() {
    this.authService.logout({ 
      logoutParams: { 
        returnTo: document.location.origin 
      } 
    });
  }
}
