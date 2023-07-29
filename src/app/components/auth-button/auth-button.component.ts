import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button mat-raised-button color="warn" (click)="logout()">
        Log Out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button mat-raised-button color="primary" (click)="login()">Log In</button>
    </ng-template>
  `,
  styles: [],
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  login():void {
    this.auth.loginWithRedirect();
  }

  logout():void {
    this.auth.logout({ 
      logoutParams: { 
        returnTo: document.location.origin 
      } 
    })
  }
}