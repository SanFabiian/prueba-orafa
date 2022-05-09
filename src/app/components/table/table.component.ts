import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  Stores: any
  Test: string
  formModal: any

  @Input() public set stores(stores: any) {
    this.Stores = stores
  }

  constructor(private element:ElementRef) { }

  ngOnInit(): void {

  }

}
