import { ValidatorFn, Validators } from '@angular/forms';
import { LinkTypeInterface } from '../interfaces';
import { LinkTypes } from './link-type-resolver';

export class IpTypeModel implements LinkTypeInterface {
  public linkType = LinkTypes.IP;
  public value = '';
  public actions = true;
  public id: string;

  constructor(inputData) {
    this.value = inputData.value;
    this.id = inputData.id;
  }


  public validators(): ValidatorFn[] {
    const ipReg = '\\b((?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:(?<!\\.)\\b|\\.)){4}';
    return [Validators.required, Validators.pattern(ipReg)];
  }

}
