import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  @Input({ required: true })
  title!:String;

  @Output()
  searchClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  listClicked: EventEmitter<void> = new EventEmitter<void>();
  
  @Output()
  gridClicked: EventEmitter<void> = new EventEmitter<void>();

  search = () => {
    this.searchClicked.emit();
  }

  viewList = () => {
    this.listClicked.emit();
  }

  viewGrid = () => {
    this.gridClicked.emit();
  }
}
