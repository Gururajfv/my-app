import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-expansion-panel',
    templateUrl: './expansion-panel.component.html',
    styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
    @Input() titleText: string = '';
    @Input() titleText1: string = '';
    @Input() titleText2: string = '';
    @Input() titleText3: string = '';
    @Input() disable: boolean = false;

    panelOpenState: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    onExpensionChange() {
        if (!this.disable) {
            this.panelOpenState = !this.panelOpenState;
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 500);
        }
    }

}
