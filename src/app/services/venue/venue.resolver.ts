import { ResolveFn } from '@angular/router';
import { VenueService } from './venue.service';
import { inject } from '@angular/core';
import { Venue } from 'src/app/models/venue';
import { Observable } from 'rxjs';

export const venueResolver: ResolveFn<Observable<Venue>> = (
  route, 
  state, 
  venuesService = inject(VenueService)
):Observable<Venue> => {
    const id = route.paramMap.get('venueId')!;
    console.log('resovling venue: ', id);
    return venuesService.getVenue(id);
};
