import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/modules/material/material.module";
import { ExpansionPanelComponent } from "./expansion-panel.component";

@NgModule({
    declarations: [
        ExpansionPanelComponent
    ],
    exports: [
        ExpansionPanelComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class ExpansionPanelModule { }