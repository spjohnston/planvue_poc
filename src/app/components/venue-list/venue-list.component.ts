import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Venue } from 'src/app/models/venue';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  
  columns = ["name", "createdBy", "createdOn", "modifiedBy", "modifiedOn"];

  @Input({required: true})
  venues!: Venue[];
  datasource = new MatTableDataSource<Venue>();

  ngOnInit(): void {
    this.datasource.data = this.venues;
  }
}
