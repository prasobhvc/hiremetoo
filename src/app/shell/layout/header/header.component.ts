import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'HMT';
  loggedIn: boolean = false;
  constructor() { }

  ngOnInit() {
    this.loggedIn = true;
  }
  onCheckUserLoggedin() {
    return this.loggedIn;
  }
  getColor() {
    if (this.loggedIn) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
