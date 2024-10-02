import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator1: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password1 === control.value.password2
    ? null
    : { PasswordNoMatch: true };
};

export function confirmPasswordValidator2(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password1 = control.get('password1');
  const password2 = control.get('password2');

  if (password1 && password2 && password1.value !== password2.value) {
    return { PasswordNoMatch: true };
  }
  return null;
}
