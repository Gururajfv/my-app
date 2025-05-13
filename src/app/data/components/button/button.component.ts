
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() text: '' | any;
    @Input() color: string = '#26A9E0';
    @Input() textcolor: string | any = '';
    @Input() width: '' | any;
    @Input() height: '' | any;
    @Input() hasborder: boolean | any = false;
    @Input() border: '' | any = '';
    @Input() fontSize: '' | any = ''
    @Input() isDisabled: boolean | any = false;
    @Input() marginTop: any;
    @Input() marginRight: any;
    @Input() marginLeft: any;
    @Input() paddingBottom: any;
    @Input() paddingTop: any;
    @Output() onClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
        if (this.hasborder == true) {
            this.border = '1px solid #26A9E0';
        }
        else {
            this.hasborder = '';
        }

    }
    onClickbutton() {
        this.onClick.emit();
        let data = true;
    }
}
