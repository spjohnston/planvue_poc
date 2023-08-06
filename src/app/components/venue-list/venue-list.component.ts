import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Venue } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit, OnDestroy {

  columns:string[] = ["name", "createdBy", "createdOn", "modifiedBy", "modifiedOn"];

  datasource = new MatTableDataSource<Venue>();

  filterSubscription: Subscription;

  private venuesAreFiltered:boolean = false;

  constructor(private venueService:VenueService, private router:Router) {
    this.filterSubscription = venueService.venueFilter$.subscribe(
      venueFilter => {
        this.venuesAreFiltered = venueFilter != null;
        if (venueFilter) {
          console.log('filter value: ', venueFilter);
          let filterValue = venueFilter.text?.trim().toLowerCase() || '';
          this.datasource.filter = filterValue;
        } else {
          this.datasource.filter = '';
        }
      }
    );
  }

  ngOnInit(): void {
    this.datasource.data = this.venueService.getVenues();
    this.datasource.filterPredicate = function (venue:Venue, filter:string) {
      return !filter || (
        venue.name.toLocaleLowerCase().indexOf(filter) != -1 ||
        venue.createdBy.name?.toLocaleLowerCase().indexOf(filter) != -1
      );
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
