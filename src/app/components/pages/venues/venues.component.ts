import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { VenueFilter } from 'src/app/models/venue-filter';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private venueService = inject(VenueService);

  @ViewChild('filter') 
  filterTextField!: ElementRef<HTMLInputElement>;

  filterForm: FormGroup = this.formBuilder.group({
    text: '',
    active: false
  });

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(val => {
      this.venueService.updateFilter(val);
    });
  }

  /**
   * This is a callback from the ListPageComponent when the "Filter" button 
   * is toggled. Perform setup/cleanup actions here for showing/hiding the
   * filter component.
   */
  filterVenuesToggled = (showingFilter:boolean) => {
    if (showingFilter) {
      this.filterTextField.nativeElement.focus();
    } else {
      this.filterForm.reset(new VenueFilter());
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
}
