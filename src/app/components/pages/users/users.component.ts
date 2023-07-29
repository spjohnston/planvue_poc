import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  search = () => {
    console.log('searching');
  }

  showList = () => {
    console.log('showing users list');
  }

  showGrid = () => {
    console.log('showing users grid');
  }
}
