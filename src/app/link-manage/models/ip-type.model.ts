import { LinkTypeInterface } from '../interfaces/link-type.interface';
import { ValidatorFn, Validators } from '@angular/forms';
import { LinkTypes } from './link-type-resolver';

export class IpTypeModel implements LinkTypeInterface {
  public type = LinkTypes.IP;
  public value = '';

  constructor(inputValue) {
    this.value = inputValue;
  }

  public validators(): ValidatorFn[] {
    const ipReg = '\\b((?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:(?<!\\.)\\b|\\.)){4}';
    return [Validators.required, Validators.pattern(ipReg)];
  }
}
