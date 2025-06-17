import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    loginForm: UntypedFormControl | any;

    constructor(
        private http: HttpClient,
    ) {
        this.loginForm = this.form();
    }

    form() {
        return new UntypedFormGroup({
            username: new UntypedFormControl(''),
            password: new UntypedFormControl('')
        })
    }

    login(): Observable<any> {
        const url = '';
        return this.http.get(url);
    }
}