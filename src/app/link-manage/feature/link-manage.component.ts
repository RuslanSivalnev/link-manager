import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-link-manage',
  templateUrl: './link-manage.component.html',
  styleUrls: ['./link-manage.component.scss']
})
export class LinkManageComponent implements OnInit {

  public createLinkForm: FormGroup = this.fb.group({
    type: [''],
    value: ['']
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

}
