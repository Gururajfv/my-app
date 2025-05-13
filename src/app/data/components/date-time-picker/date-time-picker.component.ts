import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
    selector: 'app-date-time-picker',
    templateUrl: './date-time-picker.component.html',
    styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
    @Input() mindate: Date | null = null;
    @Input() maxdate: Date | null = null;
    @Input() controlname: UntypedFormControl = new UntypedFormControl();
    minDateString: string = '';
    maxDateString: string = '';
    // mindate: Date = new Date();
    // maxdate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
    @Output() dateTimeSelected = new EventEmitter<{ date: string, time: string, period: string }>();
    selectedDate: string = '';
    selectedTime: string = '';
    selectedPeriod: string = 'PM';

    ngOnInit(): void {
        if (this.mindate) {
            this.minDateString = this.mindate.toISOString().split('T')[0];
        }
        if (this.maxdate) {
            this.maxDateString = this.maxdate.toISOString().split('T')[0];
        }
    }

    onChange() {
        this.dateTimeSelected.emit({
            date: this.formatDate(this.selectedDate),
            time: this.selectedTime,
            period: this.selectedPeriod
        });
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }




}