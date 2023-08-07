import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venue } from 'src/app/models/venue';

@Component({
  selector: 'app-venue-info',
  templateUrl: './venue-info.component.html',
  styleUrls: ['./venue-info.component.css']
})
export class VenueInfoComponent implements OnInit {

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  venue?:Venue;

  ngOnInit(): void {
    this.route.parent?.data
        .subscribe((data) => {
          this.venue = data['venue'];
        });
  }
}
