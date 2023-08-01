import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  searchToggled = (showingSearch:boolean) => {
    console.log('searching ', showingSearch);
  }

  showList = () => {
    console.log('showing favorites list');
  }

  showGrid = () => {
    console.log('showing favorites grid');
  }
}
