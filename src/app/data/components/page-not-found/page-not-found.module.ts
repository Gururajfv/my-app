import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/modules/material/material.module";
import { PageNotFoundComponent } from "./page-not-found.component";
import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        PageNotFoundRoutingModule,
    ],
    exports: [PageNotFoundComponent],
})
export class PageNotFoundModule { }