import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  /**
   * This is a callback from the ListPageComponent when the "Filter" button 
   * is toggled. Perform setup/cleanup actions here for showing/hiding the
   * filter component.
   */
  filterFavoritesToggled = (showingFilter:boolean) => {
    if (showingFilter) {
      console.log('filtering favorites');
    } else {
      console.log('resetting favorites filter');
    }
  }

  /**
   * This is a callback from the ListPageComponent when the "List" button 
   * is clicked.
   */
  showFavoritesList = () => {
    console.log('showing favorites list');
  }

  /**
   * This is a callback from the ListPageComponent when the "Grid" button 
   * is clicked.
   */
  showFavoritesGrid = () => {
    console.log('showing favorites grid');
  }
}
