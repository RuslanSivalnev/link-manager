import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from '../../interfaces';

@Component({
  selector: 'app-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.scss']
})
export class LinkTableComponent implements OnInit {
  @Output() public deleteEvent = new EventEmitter();
  @Output() public editEvent = new EventEmitter();
  @Input() public links$: Observable<LinkInterface[]>;

  displayedColumns: string[] = ['linkType', 'value', 'actions'];

  constructor() {
  }

  ngOnInit(): void {
  }

  public doDeleteEvent(id: string): void {
    this.deleteEvent.emit(id);
  }

  public doEditEvent(element: LinkInterface): void {
    this.editEvent.emit(element);
  }
}
