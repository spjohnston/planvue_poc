import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface View {
  label:string;
  icon:string;
  route?:string;
}

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  
  @Input({required:true})
  detailTitle!:string;

  @Input()
  views:View[] = [];

  @Output()
  viewChanged: EventEmitter<View> = new EventEmitter<View>();

  currentView?:View;

  ngOnInit(): void {
    if (this.views.length > 0) {
      this.currentView = this.views[0];
    }
  }

  changeView(view:View):void {
    this.currentView = view;
    this.viewChanged.emit(this.currentView);
  }
}
