import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeRoutingModule } from "./home-routing.module";
import { TextInputModule } from "../../data/components/text-input/text-input.module";
import { LookupPopupModule } from "src/app/data/components/lookup-popup/lookup-popup.module";

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        NgbCarouselModule,
        HomeRoutingModule,
        TextInputModule,
        LookupPopupModule,
    ]
})
export class HomeModule { }