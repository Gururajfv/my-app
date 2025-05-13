import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/modules/material/material.module";
import { ButtonComponent } from "./button.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ButtonComponent],
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule  ],
    exports: [
      ButtonComponent
    ]
  })
  export class ButtonModule { }