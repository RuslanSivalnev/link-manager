import { Component, OnInit } from '@angular/core';

export interface LinkItemInterface {
  type: string;
  value: string;
  actions: string;
}

const ELEMENT_DATA: LinkItemInterface[] = [
  { type: '1', value: 'Hydrogen', actions: '' },
  { type: '2', value: 'Helium', actions: '' },
  { type: '3', value: 'Lithium', actions: '' }
];

@Component({
  selector: 'app-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.scss']
})
export class LinkTableComponent implements OnInit {

  displayedColumns: string[] = ['type', 'value', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
