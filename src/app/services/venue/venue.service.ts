import { Injectable } from '@angular/core';
import { Venue } from '../../models/venue';
import { VenueFilter } from '../../models/venue-filter';
import { Observable, Subject, of } from 'rxjs';

export const VENUES:Venue[] = [
  {
    id: "37c9e0fc-57fc-4c44-9361-57e4690da11b",
    name: "JW Marriott at Grande Lakes Orlando",
    imageUri: "https://api.11thhourbiz.com/_upload/a42c90cc0c02dafc/JW_IconPhoto.jpg",
    createdBy:{
      id: "153186f8-1a61-4aeb-8ca3-606a3208c8ba",
      username: "spjohnston@gmail.com",
      name: "Steve"
    },
    createdOn: new Date()
  },
  {
    id: "efad766d-8d53-4e71-a91e-dd973f5206d9",
    name: "Rosen Centre",
    imageUri: "https://api.11thhourbiz.com/_upload/01399147b2624906/RosenCentre_ICON_forPlanvue.png",
    createdBy:{
      id: "153186f8-1a61-4aeb-8ca3-606a3208c8ba",
      username: "spjohnston@gmail.com",
      name: "Steve"
    },
    createdOn: new Date()
  },
  {
    id: "c578d137-8dc3-4287-8871-fbb798d42d6d",
    name: "Walt Disney World Swan and Dolphin Resort",
    imageUri: "https://api.11thhourbiz.com/_upload/b98c005e2a613a3d/SandD_IconPhoto.png",
    createdBy:{
      id: "153186f8-1a61-4aeb-8ca3-606a3208c8ba",
      username: "spjohnston@gmail.com",
      name: "Steve"
    },
    createdOn: new Date()
  },{
    id: "31fd707a-eda4-4a3e-ab72-356fcf6e7c96",
    name: "Disney's Contemporary Resort",
    imageUri: "https://api.11thhourbiz.com/_upload/e581c969a3eb8a74/Contemporary_ICON_forPlanvue.png",
    createdBy:{
      id: "153186f8-1a61-4aeb-8ca3-606a3208c8ba",
      username: "spjohnston@gmail.com",
      name: "Steve"
    },
    createdOn: new Date()
  }
];

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private venueFilterSource = new Subject<VenueFilter|null>();
  venueFilter$ = this.venueFilterSource.asObservable();

  constructor() { }

  updateFilter(venueFilter:VenueFilter|null): void {
    this.venueFilterSource.next(venueFilter);
  }

  getVenues(): Venue[] {
    return VENUES.sort((v1:Venue, v2:Venue) => v1.name > v2.name ? 1 : -1 );
  }

  getVenue(id:string): Observable<Venue>  {
    console.log('looking for venue: ', id);
    let venue = VENUES.find(v => v.id === id);
    if (venue === undefined) {
      throw new Error(`No venue found with id: ${id}`);
      
    }
    
    return of(venue);
  }
}
