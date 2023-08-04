import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  view:string = 'list';
  showFilter:boolean = false;

  @Input({ required: true })
  title!:String;

  @Output()
  filterToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  listClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  gridClicked: EventEmitter<void> = new EventEmitter<void>();

  headerClick = ($evt:any) => {
    $evt.stopPropagation();
    console.log('filter header clicked...will toggle filter');
  }

  filter = ($evt:any) => {
    $evt.stopPropagation();
    this.showFilter = !this.showFilter;
  }

  setFilterFlag = (showFilter:boolean) => {
    this.showFilter = showFilter;
    this.filterToggled.emit(this.showFilter);
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
