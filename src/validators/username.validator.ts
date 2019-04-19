import { FormControl } from '@angular/forms';

export class UserNameValidator {

    static checkUsername(control: FormControl): any {

        return new Promise(resolve => {

            //Fake a slow response from server

            setTimeout(() => {
                if (control.value.toLowerCase() === "greg") {

                    resolve({
                        "username taken": true
                    });

                } else {
                    resolve(null);
                }
            }, 2000);

        });
    }

}