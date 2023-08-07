import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '@auth0/auth0-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

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
import { VenueComponent } from './components/pages/venue/venue.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { VenueInfoComponent } from './components/venue-info/venue-info.component';
import { MapComponent } from './components/map/map.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { VenueLocationsComponent } from './components/venue-locations/venue-locations.component';

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
    VenueListComponent,
    VenueComponent,
    DetailPageComponent,
    VenueInfoComponent,
    MapComponent,
    TemplatesComponent,
    VenueLocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(environment.auth),
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
