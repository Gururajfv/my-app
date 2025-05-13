import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MaterialModule } from "src/app/modules/material/material.module";
import { ButtonModule } from "../button/button.module";
import { NgxFileDropModule } from "ngx-file-drop";
import { UploadPopupComponent } from "./upload-popup.component";
import { TextInputModule } from "../text-input/text-input.module";

@NgModule({
    declarations: [UploadPopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        MatDialogModule,
        TextInputModule,
        MaterialModule,
        NgxFileDropModule,
        ButtonModule
    ],
    exports: [UploadPopupComponent]
})
export class UploadPopupModule { }