import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator1: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const passwordConfirm = control.get('passwordConfirm')?.value;

  // If passwordConfirm is empty, indicate that passwords do not match
  if (!passwordConfirm) {
    return { PasswordNoMatch: false }; // or a different key like PasswordConfirmRequired
  }

  // Check if passwords match
  return password === passwordConfirm ? null : { PasswordNoMatch: true };
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

export function passwordMatchValidator(): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('passwordConfirm')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  };
}
