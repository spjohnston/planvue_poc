import { Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, inject } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent {

  private venueService = inject(VenueService);

  @ViewChild('filter') 
  filter!: ElementRef<HTMLInputElement>;

  @Input({required: true})
  filterValue:string = '';

  /**
   * This is a callback from the ListPageComponent when the "Filter" button 
   * is toggled. Perform setup/cleanup actions here for showing/hiding the
   * filter component.
   */
  filterVenuesToggled = (showingFilter:boolean) => {
    if (showingFilter) {
      this.filter.nativeElement.focus();
    } else {
      console.log('resetting venues filter');
      this.filterValue = '';
      this.venueService.updateFilter(null);
    }
  }

  /**
   * This is a callback from the ListPageComponent when the "List" button 
   * is clicked.
   */
  showVenuesList = () => {
    console.log('showing venues list');
  }

  /**
   * This is a callback from the ListPageComponent when the "Grid" button 
   * is clicked.
   */
  showVenuesGrid = () => {
    console.log('showing venues grid');
  }

  /**
   * This function is called on keyup from the `filter` input field
   * @param event the keyup event
   */
  filterUpdated = (event: Event) => {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.venueService.updateFilter({
      'text': this.filterValue,
      'active': false
    })
  }
}
