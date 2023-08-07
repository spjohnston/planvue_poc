import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Venue } from 'src/app/models/venue';
import { View } from '../../detail-page/detail-page.component';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  venue$: Observable<Venue | null> = of(null);


  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  views: View[] = [
    {
      label: 'Info',
      icon:'info_outlined',
      route: '/venues'
    },{
      label: 'Map',
      icon: 'map',
      route: 'map'
    },{
      label: 'Templates',
      icon: 'zoom_out_map',
      route: 'templates'
    },{
      label: 'Locations',
      icon: 'storefront_outlined',
      route: 'locations'
    }
  ];

  ngOnInit(): void {
    this.venue$ = this.route.data.pipe(map(({ venue }) => venue));
    this.venue$.subscribe();
  }

  handleViewChanged(view:View):void {
    if (view.route === '/venues') {
      const id = this.route.paramMap
    }
    console.log("Venue view changed to ", view.label);
    this.router.navigate([view.route], {relativeTo:this.route});
  }
}
