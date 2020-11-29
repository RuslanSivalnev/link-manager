import { LinkTypeInterface } from '../interfaces';
import { ValidatorFn, Validators } from '@angular/forms';
import { LinkTypes } from './link-type-resolver';

export class HostTypeModel implements LinkTypeInterface {
  public linkType = LinkTypes.HOST;
  public value = '';
  public actions = true;
  public id: string;

  constructor(inputData) {
    this.value = inputData.value;
    this.id = inputData.id;
  }

  public validators(): ValidatorFn[] {
    const hostReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    return [Validators.required, Validators.pattern(hostReg)];
  }

}
