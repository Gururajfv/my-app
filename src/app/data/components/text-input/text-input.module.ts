import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/modules/material/material.module";
import { TextInputComponent } from "./text-input.component";

@NgModule({
    declarations: [
        TextInputComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [TextInputComponent],
})
export class TextInputModule { }