import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-link-input',
  templateUrl: './link-input.component.html',
  styleUrls: ['./link-input.component.scss']
})
export class LinkInputComponent implements OnInit {
  public selectTypes = [{ value: 'ip', title: 'ip' }, { value: 'host', title: 'host' }];
  @Input() public createLinkForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
