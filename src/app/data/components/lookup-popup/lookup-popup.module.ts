import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LookupPopupComponent } from "./lookup-popup.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/modules/material/material.module";

@NgModule({
    declarations: [LookupPopupComponent],
    exports: [LookupPopupComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
})
export class LookupPopupModule { }