import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  showFilter = (showingFilter:boolean) => {
    console.log('filtering ', showingFilter);
  }

  showList = () => {
    console.log('showing locations list');
  }

  showGrid = () => {
    console.log('showing locations grid');
  }
}
