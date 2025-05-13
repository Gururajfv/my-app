import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/data/model/menu-model/menu.model';
import { LocalStorageService } from '../local-storage-service/locastorage.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class CustomTabService {
    tabsList: MenuModel[] = [];

    constructor(private router: Router,
        public localstoarageService: LocalStorageService,
        @Inject(DOCUMENT) private document: Document
    ) { }

    addToTheList(item: MenuModel) {
        this._updateTabsValue();
        const res = this.tabsList.find((x) => x.routerLink == item.routerLink);
        if (!res) {
            item.isShow = true;
            this.tabsList.push(item);
        } else {
            this.tabsList.forEach((y) => {
                if (item.routerLink == y.routerLink) {
                    y.isShow = true;
                }
            });
        }

        this._naviage(item.routerLink);
    }

    _updateTabsValue() {
        this.tabsList.filter((y) => (y.isShow = false));
    }

    removeFromTheList(item: MenuModel) {
        let routeToNavigate: any;
        for (let i = 0; this.tabsList.length > 0; i++) {
            if (this.tabsList[i].routerLink == item.routerLink) {
                routeToNavigate = this.tabsList[i + 1];
                if (!routeToNavigate) {
                    routeToNavigate = this.tabsList[i - 1];
                    break;
                } else {
                    break;
                }
            }
        }

        this.tabsList = this.tabsList.filter(
            (x) => x.routerLink != item.routerLink
        );

        this._updateTabsValue();
        this.tabsList.forEach((y) => {
            if (routeToNavigate.routerLink == y.routerLink) {
                y.isShow = true;
            }
        });

        this._naviage(routeToNavigate?.routerLink);
    }

    _naviage(routeName: string) {
        if (routeName) {
            this.router.navigate([routeName]);
        } else {

            const defualtModel = this._createDefaultModel();
            this.tabsList.push(defualtModel)
            this.router.navigate([defualtModel.routerLink]);
        }
    }

    _createDefaultModel() {
        return {
            text: "Login",
            routerLink: "/login",
            isShow: true
        }
    }
    
    // _createDefaultModel() {
    //     const isLoggedIn = this.localstoarageService.getLocalStorage('isLoggedIn') === 'true';
    //     if (isLoggedIn) {
    //         return {
    //             text: "Dashboard",
    //             routerLink: "/dashboard",
    //             isShow: true
    //         }
    //     } else {
    //         return {
    //             text: "Dashboard",
    //             routerLink: "/login",
    //             isShow: false
    //         }
    //     }
    // }
}
