import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/data/model/menu-model/menu.model';
import { CustomTabService } from 'src/app/Services/tab-service/custom-tab.service';

@Component({
    selector: 'app-custom-tab',
    templateUrl: './custom-tab.component.html',
    styleUrls: ['./custom-tab.component.scss'],
})
export class CustomTabComponent implements OnInit {
    @Input() isTabSelected: boolean = false;
    @Output() onClick = new EventEmitter<any>();
    @Output() onRemove = new EventEmitter<any>();


    constructor(
        public customTabsService: CustomTabService,

    ) { }

    ngOnInit(): void { }

    onOpen(item: MenuModel) {
        this.onClick.emit(item);
        this.customTabsService.addToTheList(item);

    }

    onClose(item: MenuModel) {
        this.onRemove.emit(item);
    }
}
