import { ValidatorFn } from '@angular/forms';

export interface LinkInterface {
  linkType: string;
  value: string;
  actions: boolean;
  id: string;
}

export interface LinkTypeInterface extends LinkInterface {
  validators(): ValidatorFn[];
}
