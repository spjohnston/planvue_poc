import { Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { VenueService } from 'src/app/services/venue.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent {

  @ViewChild('filter') 
  filter!: ElementRef<HTMLInputElement>;

  @Input({required: true})
  filterValue:string = '';

  constructor(private venuesService:VenueService) {}

  filterToggled = (showingFilter:boolean) => {
    if (showingFilter) {
      this.filter.nativeElement.focus();
    } else {
      console.log('resetting filter');
      this.filterValue = '';
      this.venuesService.updateFilter(
        {
          text: this.filterValue,
          active: true
        }
      );
    }
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
