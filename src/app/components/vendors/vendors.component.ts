import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../vendor';
import { VENDORS } from '../../mock-vendors';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  vendors = VENDORS;
  constructor() { }

  ngOnInit() {
  }

}
