import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LinkTypes } from '../../models/link-type-resolver';

@Component({
  selector: 'app-link-input',
  templateUrl: './link-input.component.html',
  styleUrls: ['./link-input.component.scss']
})
export class LinkInputComponent implements OnInit {
  public selectTypes = [{ value: LinkTypes.IP, title: 'ip' }, { value: LinkTypes.HOST, title: 'host' }];
  @Output() public selectTypeEvent = new EventEmitter();
  @Input() public createLinkForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  public doSelectTypeEvent(type: string): void{
    this.selectTypeEvent.emit(type);
  }

  asd() {
    console.log(this.createLinkForm);
  }
}
