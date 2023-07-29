import { Component } from '@angular/core';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent {

  search = () => {
    console.log('searching');
  }

  showList = () => {
    console.log('showing venues list');
  }

  showGrid = () => {
    console.log('showing venues grid');
  }

}
