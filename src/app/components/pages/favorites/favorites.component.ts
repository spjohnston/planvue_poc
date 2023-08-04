import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  filterToggled = (showingFilter:boolean) => {
    console.log('filtering ', showingFilter);
  }

  showList = () => {
    console.log('showing favorites list');
  }

  showGrid = () => {
    console.log('showing favorites grid');
  }
}
