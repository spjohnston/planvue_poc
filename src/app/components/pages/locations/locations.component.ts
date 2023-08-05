import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  /**
   * This is a callback from the ListPageComponent when the "Filter" button 
   * is toggled. Perform setup/cleanup actions here for showing/hiding the
   * filter component.
   */
  showLocationsFilter = (showingFilter:boolean) => {
    if (showingFilter) {
      console.log('filtering locations');
    } else {
      console.log('resetting locations filter');
    }
  }

  /**
   * This is a callback from the ListPageComponent when the "List" button 
   * is clicked.
   */
  showLocationsList = () => {
    console.log('showing locations list');
  }

  /**
   * This is a callback from the ListPageComponent when the "Grid" button 
   * is clicked.
   */
  showLocationsGrid = () => {
    console.log('showing locations grid');
  }
}
