import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePickerComponent } from './custom-date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';



@NgModule({
    declarations: [
        CustomDatePickerComponent
    ],
    exports: [
        CustomDatePickerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,        
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ]
})
export class CustomDatePickerModule { }
