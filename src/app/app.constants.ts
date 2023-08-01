import { Route } from "@angular/router";
import { VenuesComponent } from "./components/pages/venues/venues.component";
import { LocationsComponent } from "./components/pages/locations/locations.component";
import { FavoritesComponent } from "./components/pages/favorites/favorites.component";
import { UsersComponent } from "./components/pages/users/users.component";
import { AuthGuard } from "@auth0/auth0-angular";

export const APP_TITLE:string = "Planvue";
export const TOOLBAR_PAGES: Route[] = [
  {
    path: "venues",
    title: "Venues",
    component: VenuesComponent,
    canActivate: [AuthGuard]
  }, {
    path: "locations",
    title: "Locations",
    component: LocationsComponent,
    canActivate: [AuthGuard]
  }, {
    path: "favorites",
    title: "Favorites",
    component: FavoritesComponent,
    canActivate: [AuthGuard]
  }, {
    path: "users",
    title: "Users",
    component: UsersComponent,
    canActivate: [AuthGuard]
  }
];