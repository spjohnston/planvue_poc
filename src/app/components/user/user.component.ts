import { Component, Input, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  @Input()
  user?: User | null | undefined;
  
  constructor(){}

  ngOnInit(): void {
    console.log(this.user);
  }
}
