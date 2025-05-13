import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
    constructor() { }

    @Input() requiredErrorMessage?: string | any = "This field is required";
    @Input() minlengthErrorMessage?: string | any = "";
    @Input() maxlengthErrorMessage?: string | any = "";
    @Input() patternErrorMessage?: string | any = "";
    @Input() invaliddigitsErrorMessage?: string | any = "Enter a valid number";
    @Output() invalidMaxRange?: string | any = "Enter valid Range"
    @Input() inputlabel?: string | any = '';
    @Input() required?: boolean | any = false;
    @Input() isAsterisk?: boolean | any = true;
    @Input() customWidth: string = '100%';
    @Input() inputType: string | any = 'text';
    @Input() inputId?: string | any = '';
    @Input() placeHolder?: string | any = null;
    @Input() inputClass?: string | any;
    @Input() controlname: UntypedFormControl | any;
    @Input() minlength: any = '';
    @Input() maxlength: any = '';
    @Input() readonly?: boolean | any = false;
    @Input() isSearch: boolean = false;
    @Input() allowedType: string = '';



    @Output() onInputBlur = new EventEmitter<any>();
    @Output() onEnter = new EventEmitter<any>();
    @Output() keyPress = new EventEmitter<any>();
    @Output() change = new EventEmitter<any>();
    @Output() onSearch = new EventEmitter<any>();

    ngOnInit(): void {
    }

    omit_special_char(event: any) {
        this.keyPress.emit(event);
        // var k;
        // k = event.charCode;
        // let k;
        // k = event.charCode;
        // return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }

    onPaste(e: any) {
        // e.preventDefault();
        // return false;
    }

    search() {
        this.onSearch.emit();
    }

    onBlur($event: any) {
        this.onInputBlur.emit($event);
    }

    enterValue(event: any) {
        this.onEnter.emit(event.target.value)
    }

    changeInput($event: any) {
        this.change.emit($event);
    }



}