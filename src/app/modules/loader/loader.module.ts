import { NgModule } from "@angular/core";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader.component";

@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule, MatDialogModule,MaterialModule],
    exports: [LoaderComponent],
  })
  export class GlobalLoaderModule {}