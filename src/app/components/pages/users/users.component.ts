import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  searchToggled = (showingSearch:boolean) => {
    console.log('searching ', showingSearch);
  }

  showList = () => {
    console.log('showing users list');
  }

  showGrid = () => {
    console.log('showing users grid');
  }
}
