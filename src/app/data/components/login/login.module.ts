import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/modules/material/material.module";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        LoginRoutingModule,
    ],
    exports: [LoginComponent],
})
export class LoginModule { }