import { Component, Inject } from '@angular/core';
import { VenueService } from 'src/app/services/venue.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent {

  constructor(private venuesService:VenueService) {}

  getVenues = () => {
    return this.venuesService.getVenues();
  }

  searchToggled = (showingSearch:boolean) => {
    console.log('searching ', showingSearch);
  }

  showList = () => {
    console.log('showing venues list');
  }

  showGrid = () => {
    console.log('showing venues grid');
  }

}
