import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  /**
   * This is a callback from the ListPageComponent when the "Filter" button 
   * is toggled. Perform setup/cleanup actions here for showing/hiding the
   * filter component.
   */
  filterUsersToggled = (showingFilter:boolean) => {
    if (showingFilter) {
      console.log('filtering users');
    } else {
      console.log('resetting users filter');
    }
  }

  /**
   * This is a callback from the ListPageComponent when the "List" button 
   * is clicked.
   */
  showUsersList = () => {
    console.log('showing users list');
  }

  /**
   * This is a callback from the ListPageComponent when the "Grid" button 
   * is clicked.
   */
  showUsersGrid = () => {
    console.log('showing users grid');
  }
}
