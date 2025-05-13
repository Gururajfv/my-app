import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomTabComponent } from "./custom-tab.component";
import { TruncatePipe } from "src/app/data/pipes/trucate-pipe/truncate.pipe";
import { MaterialModule } from "../material/material.module";

    @NgModule({
        declarations: [CustomTabComponent, TruncatePipe],
        exports: [CustomTabComponent],
        imports: [
            CommonModule,
            MaterialModule,
        ]
    })
    export class TabModule{}