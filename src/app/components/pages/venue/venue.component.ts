import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Venue } from 'src/app/models/venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  venue$: Observable<Venue | null> = of(null);

  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.venue$ = this.route.data.pipe(map(({ venue }) => venue));
  }
}
