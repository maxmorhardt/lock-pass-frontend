import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const controlValue = control.get(controlName)?.value;
    const matchingControlValue = control.get(matchingControlName)?.value;

    if (controlValue !== matchingControlValue) {
      control.get(matchingControlName)?.setErrors({ confirmPasswordValidator: true });
      return { confirmPasswordValidator: true };
    } else {
      control.get(matchingControlName)?.setErrors(null);
      return null;
    }
  };
}
