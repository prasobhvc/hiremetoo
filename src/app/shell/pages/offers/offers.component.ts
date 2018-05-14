import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  showPara: boolean = false;
  arr: any[] = [];
  arrItem: string = '';
  constructor() { }

  ngOnInit() {
  }
  onShowPara() {
    this.showPara = !this.showPara;
    return this.showPara;
  }
  addItemArray() {
    this.arr.push(this.arrItem);
  }
}
