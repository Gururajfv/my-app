import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    loginForm: FormControl | any;

    constructor(
        private http: HttpClient,
    ) {
        this.loginForm = this.form();
    }

    form() {
        return new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        })
    }

    login(): Observable<any> {
        const url = '';
        return this.http.get(url);
    }
}