import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AppPageTitleStrategy } from './app-page-title-strategy';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { TOOLBAR_PAGES } from './app.constants';
import { VenueComponent } from './components/pages/venue/venue.component';
import { venueResolver } from './services/venue/venue.resolver';
import { MapComponent } from './components/map/map.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { VenueInfoComponent } from './components/venue-info/venue-info.component';
import { VenueLocationsComponent } from './components/venue-locations/venue-locations.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    title: 'Welcome',
    component: WelcomeComponent
  },
  {
    path: 'profile',
    title: 'My Profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'venues/:venueId',
    title: 'Venue',
    component: VenueComponent,
    canActivate: [AuthGuard],
    resolve: { venue: venueResolver },
    children: [
      {
        path:'', 
        component: VenueInfoComponent,
      },{
        path:'map', 
        component: MapComponent
      },{
        path:'templates', 
        component: TemplatesComponent
      },{
        path:'locations', 
        component: VenueLocationsComponent
      }
    ]
  }
];

const allRoutes: Routes = [...routes, ...TOOLBAR_PAGES];

@NgModule({
  imports: [RouterModule.forRoot(allRoutes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: AppPageTitleStrategy
    }
  ]
})
export class AppRoutingModule { }
