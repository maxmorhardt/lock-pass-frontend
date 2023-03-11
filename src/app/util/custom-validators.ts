import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

  static valuesMatch(value1: string, value2: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control1 = formGroup.get(value1);
      const control2 = formGroup.get(value2);

      if (control1?.value !== control2?.value) {
        control2?.setErrors({ valuesMatch: true });
        return { valuesMatch: true };
      } else {
        control2?.setErrors(null);
        return null;
      }
    };
  }

}
