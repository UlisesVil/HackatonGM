import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl): any {
        const password = AC.get('clave').value;
        const confirmPassword = AC.get('confirmPassword').value;
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        } else {
            return null;
        }
    }

}