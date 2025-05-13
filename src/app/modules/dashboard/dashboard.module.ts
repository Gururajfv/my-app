import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CustomDatePickerModule } from "../../data/components/date-picker/custom-date-picker.module";
import { TextInputModule } from "../../data/components/text-input/text-input.module";
import { FormsModule } from "@angular/forms";
import { DateTimePickerModule } from "../../data/components/date-time-picker/date-time-picker.module";
import { ButtonModule } from "../../data/components/button/button.module";
import { UploadPopupModule } from "src/app/data/components/upload-popup/upload-popup.module";
import { LoginModule } from "src/app/data/components/login/login.module";
import { ExpansionPanelModule } from "../../data/components/expansion-panel/expansion-panel.module";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DashboardRoutingModule,
    CustomDatePickerModule,
    TextInputModule,
    DateTimePickerModule,
    ButtonModule,
    UploadPopupModule,
    LoginModule,
    ExpansionPanelModule,
    NgbCarouselModule
]
})
export class DashboardModule { }