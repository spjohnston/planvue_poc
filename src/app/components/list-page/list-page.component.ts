import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  view:string = 'list';
  showSearch:boolean = false;

  @Input({ required: true })
  title!:String;

  @Output()
  searchToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  listClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  gridClicked: EventEmitter<void> = new EventEmitter<void>();

  headerClick = ($evt:any) => {
    $evt.stopPropagation();
    console.log('click');
  }

  search = ($evt:any) => {
    $evt.stopPropagation();
    this.showSearch = !this.showSearch;
    this.searchToggled.emit(this.showSearch);
  }

  viewList = ($evt:any) => {
    $evt.stopPropagation();
    this.view = 'list';
    this.listClicked.emit();
  }

  viewGrid = ($evt:any) => {
    $evt.stopPropagation();
    this.view = 'grid';
    this.gridClicked.emit();
  }
}
