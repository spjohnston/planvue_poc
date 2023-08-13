import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Venue } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue-grid',
  templateUrl: './venue-grid.component.html',
  styleUrls: ['./venue-grid.component.css']
})
export class VenueGridComponent implements OnInit {
  private venueService = inject(VenueService);

  ngOnInit(): void {
    console.log('venue grid...');
  }

  getVenues():Observable<Venue[]> {
    return this.venueService.getVenuesTemp();
  }

  getImage(venue:Venue):string {
    const venueId = venue.id;
    const imageName = venue.imageName;

    if (imageName) {
      return `/assets/images/venues/${venueId}/${imageName}`; 
    }

    return '';
  }
}
