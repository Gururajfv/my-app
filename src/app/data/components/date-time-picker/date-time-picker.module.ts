import { NgModule } from "@angular/core";
import { DateTimePickerComponent } from "./date-time-picker.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardRoutingModule } from "src/app/modules/dashboard/dashboard-routing.module";
import { MaterialModule } from "src/app/modules/material/material.module";
import { CustomDatePickerModule } from "../date-picker/custom-date-picker.module";
import { TextInputModule } from "../text-input/text-input.module";

@NgModule({
    declarations: [DateTimePickerComponent],
    exports: [DateTimePickerComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        DashboardRoutingModule,
        CustomDatePickerModule,
        TextInputModule
    ],
})
export class DateTimePickerModule { }