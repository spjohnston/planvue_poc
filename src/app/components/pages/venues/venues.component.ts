import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { VenueService } from 'src/app/services/venue.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent {
  
  @Input({required: true})
  filterValue:string = '';

  constructor(private venuesService:VenueService) {}

  searchToggled = (showingSearch:boolean) => {
    console.log('resetting filter');
    this.filterValue = '';
    this.venuesService.updateFilter(
      {
        text: this.filterValue,
        active: true
      }
    );
  }

  showList = () => {
    console.log('showing venues list');
  }

  showGrid = () => {
    console.log('showing venues grid');
  }

  filterUpdated = (event: Event) => {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.venuesService.updateFilter({
      'text': this.filterValue,
      'active': false
    })
  }
}
