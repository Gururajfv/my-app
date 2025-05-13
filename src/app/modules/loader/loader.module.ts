import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader.component";

@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule, MatDialogModule,MaterialModule],
    exports: [LoaderComponent],
  })
  export class GlobalLoaderModule {}