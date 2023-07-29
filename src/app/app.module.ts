import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '@auth0/auth0-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { environment } from 'src/environments/environment';
import { VenuesComponent } from './components/pages/venues/venues.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { UsersComponent } from './components/pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    WelcomeComponent,
    ProfileComponent,
    VenuesComponent,
    LocationsComponent,
    FavoritesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(environment.auth),
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
