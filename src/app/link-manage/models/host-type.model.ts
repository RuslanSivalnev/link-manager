import { LinkTypeInterface } from '../interfaces/link-type.interface';
import { ValidatorFn, Validators } from '@angular/forms';
import { LinkTypes } from './link-type-resolver';

export class HostTypeModel implements LinkTypeInterface {
  public type = LinkTypes.HOST;
  public value = '';

  constructor(inputValue) {
    this.value = inputValue;
  }

  public validators(): ValidatorFn[] {
    const hostReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    return [Validators.required, Validators.pattern(hostReg)];
  }
}
