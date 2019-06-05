import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class CustomValidators {
    static dateShouldBePassed(control: AbstractControl): ValidationErrors | null {
        console.log(control.value)
        if (Date.parse(control.value) < Date.now()) return null
        return {
            dateShouldBePassed: true
        }
    }

    static atLeastOneShouldbeSelected(group: FormGroup) {
        if (Object.values(group.value).includes(true)) return
        return {
            atLeastOneShouldbeSelected: true
        }
    }
}
