import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  search = () => {
    console.log('searching');
  }

  showList = () => {
    console.log('showing locations list');
  }

  showGrid = () => {
    console.log('showing locations grid');
  }
}
