import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Venue } from 'src/app/models/venue';
import { VenueFilter } from 'src/app/models/venue-filter';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit, OnDestroy {
  private venueService = inject(VenueService);
  private router = inject(Router);

  columns:string[] = ["name", "createdBy", "createdOn"];//, "modifiedBy", "modifiedOn"];

  datasource = new MatTableDataSource<Venue>();

  filterSubscription: Subscription;

  private venuesAreFiltered:boolean = false;

  constructor() {
    this.filterSubscription = this.venueService.venueFilter$.subscribe(
      venueFilter => {
        // this.venuesAreFiltered = venueFilter != null;
        // if (venueFilter) {
          this.datasource.filter = JSON.stringify(venueFilter) ;
        // } else {
          // this.datasource.filter = '';
        // }
      }
    );
  }

  ngOnInit(): void {
    console.log('venue list...');
    this.datasource.data = this.venueService.getVenues();
    this.datasource.filterPredicate = function (venue:Venue, filter:string) {
      if (filter) {
        const venueFilter:VenueFilter = JSON.parse(filter);
        const filterText = venueFilter.text?.trim().toLowerCase() || '';
        if (venueFilter.active) {
          // user is requesting to only see active venues that match their filter
          // criteria
          return venue.active && (
            venue.name.toLocaleLowerCase().indexOf(filterText) != -1 ||
            venue.createdBy.name?.toLocaleLowerCase().indexOf(filterText) != -1
          );
        }

        // return any venue that matches filter criteria regardless of active flag
        return (
          venue.name.toLocaleLowerCase().indexOf(filterText) != -1 ||
          venue.createdBy.name?.toLocaleLowerCase().indexOf(filterText) != -1
        );
      }

      return false;
    };
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }

  getNoDataMessage():string {
    return this.venuesAreFiltered ? 
      'No venues found matching your filter criteria.' : 'No venues found.'
  }

  selectVenue(venueId:string):void  {
    console.log(venueId);
    this.router.navigate(["/venues/" + venueId]);
  }
}
