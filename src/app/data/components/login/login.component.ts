import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { LoginService } from "src/app/Services/login-service/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    @Output() onLoginSuccess = new EventEmitter<any>();
    hidePassword: boolean = true;

    constructor(
        public loginService: LoginService,
    ) { }

    ngOnInit(): void {

    }


    togglePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }


    login() {
        this.onLoginSuccess.emit();
    }
}
