import { ValidatorFn } from '@angular/forms';

export interface LinkTypeInterface {
  type: string;
  value: string;

  validators(): ValidatorFn[];
}
