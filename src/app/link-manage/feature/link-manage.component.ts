import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LinkTypeResolver } from '../models/link-type-resolver';
import { LinkInterface, LinkTypeInterface } from '../interfaces';
import { Observable } from 'rxjs';
import { LinkManageFacade } from '../store/link-manage.facade';
import * as uuid from 'uuid';

@Component({
  selector: 'app-link-manage',
  templateUrl: './link-manage.component.html',
  styleUrls: ['./link-manage.component.scss']
})
export class LinkManageComponent implements OnInit {

  public links$: Observable<LinkInterface[]>;

  public createLinkForm: FormGroup = this.fb.group({
    linkType: [''],
    value: [''],
    id: [null]
  });

  constructor(
    private fb: FormBuilder,
    private linkMangeFacade: LinkManageFacade
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  private initializeValues(): void {
    this.linkMangeFacade.loadLinks();
    const initModel: LinkTypeInterface = LinkTypeResolver.getInitModel({ value: '' });
    this.createLinkForm.patchValue(initModel);
    this.createLinkForm.get('value').setValidators(initModel.validators());
  }

  private initializeListeners(): void {
    this.links$ = this.linkMangeFacade.links$;
  }

  public selectTypeHandler(linkType: string): void {
    const selectedTypeModel: LinkTypeInterface = LinkTypeResolver.getModelOfType({ value: '', linkType });
    this.createLinkForm.patchValue(selectedTypeModel);
    this.createLinkForm.get('value').setValidators(selectedTypeModel.validators());
    this.createLinkForm.markAsUntouched();
  }

  public submitHandler(): void {
    // check on edit
    if (this.createLinkForm.get('id').value) {
      this.linkMangeFacade.editLink(this.createLinkForm.value);
    } else {
      this.createLinkForm.patchValue({ id: uuid.v4() });
      this.linkMangeFacade.addLink(this.createLinkForm.value);
    }
    this.createLinkForm.get('value').reset();
    this.createLinkForm.get('id').reset();
  }

  public deleteHandler(id: string): void {
    this.linkMangeFacade.deleteLink(id);
  }

  public editHandler(item: LinkInterface): void {
    this.createLinkForm.get('value').clearValidators();
    const selectedTypeModel: LinkTypeInterface = LinkTypeResolver.getModelOfType(item);
    this.createLinkForm.patchValue(selectedTypeModel);
    this.createLinkForm.get('value').setValidators(selectedTypeModel.validators());
  }
}
