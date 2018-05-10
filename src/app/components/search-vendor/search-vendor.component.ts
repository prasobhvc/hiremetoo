import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-vendor',
  templateUrl: './search-vendor.component.html',
  styleUrls: ['./search-vendor.component.css']
})
export class SearchVendorComponent implements OnInit {
  searchVendor = '';
  constructor() {
  }

  ngOnInit() {
  }

  onSearchVendor(event: any) {
    this.searchVendor = (<HTMLInputElement>event.target).value;
    console.log(this.searchVendor, 'vendor');
  }
}
