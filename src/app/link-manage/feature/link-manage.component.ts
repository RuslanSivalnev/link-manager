import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LinkTypeResolver } from '../models/link-type-resolver';
import { LinkTypeInterface } from '../interfaces/link-type.interface';

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
    this.initializeValues();
    // this.initializeListeners();
  }

  private initializeValues(): void {
    const initModel: LinkTypeInterface = LinkTypeResolver.getInitModel({ value: '' });
    this.createLinkForm.setValue({type: initModel.type, value: initModel.value });
    this.createLinkForm.get('value').setValidators(initModel.validators());
  }

  public selectTypeHandler(type: string): void{
    const selectedTypeModel: LinkTypeInterface = LinkTypeResolver.getModelOfType({ value: '', type });
    this.createLinkForm.setValue(selectedTypeModel);
    this.createLinkForm.get('value').setValidators(selectedTypeModel.validators());
    this.createLinkForm.markAsUntouched();
  }
}
