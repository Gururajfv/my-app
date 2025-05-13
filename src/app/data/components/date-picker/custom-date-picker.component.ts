import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from "@angular/material/core";
import { Moment } from "moment";

export const MY_FORMATS = {
    parse: { dateInput: 'DD/MM/YYYY', },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'DD/MM/YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'DD/MM/YYYY',
    },
};

@Component({
    selector: 'app-custom-date-picker',
    templateUrl: './custom-date-picker.component.html',
    styleUrls: ['./custom-date-picker.component.scss'],
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class CustomDatePickerComponent implements OnInit {
    
    @Input() controlname: UntypedFormControl | any;
    @Input() requiredErrorMessage?: string | any = 'This Date Field is Required';
    @Input() minlengthErrorMessage?: string | any = '';
    @Input() required?: boolean | any = false;
    @Input() inputlabel?: string | any = '';
    @Input() placeHolder?: string | any = 'DD/MM/YYYY';
    @Input() minDate: any = null;
    @Input() maxDate: any = null;
    @Input() disabled: boolean = false;
    @Output() onDateChange = new EventEmitter<any>();


    constructor() { }

    ngOnInit(): void {
        console.log('value..........', this.controlname?.value)
        if (this.controlname?.value) {
            this.controlname.setValue(new Date(this.controlname?.value))
        }
    }

    onDateValueChange(value: any) {
        const m: Moment = value.value;
        this.onDateChange.emit(m);
    }
}
