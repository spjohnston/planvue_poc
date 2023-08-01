import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '@auth0/auth0-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { environment } from 'src/environments/environment';
import { VenuesComponent } from './components/pages/venues/venues.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { UsersComponent } from './components/pages/users/users.component';
import { UserComponent } from './components/user/user.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { VenueListComponent } from './components/venue-list/venue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    WelcomeComponent,
    ProfileComponent,
    VenuesComponent,
    LocationsComponent,
    FavoritesComponent,
    UsersComponent,
    UserComponent,
    ListPageComponent,
    VenueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(environment.auth),
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
