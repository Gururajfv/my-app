import { Component, Inject, OnInit } from '@angular/core';
import { MenuModel, MenuItemModel } from './data/model/menu-model/menu.model';
import { CustomTabService } from './Services/tab-service/custom-tab.service';
import { LoaderService } from './Services/loader-service/loader.service';
import { LoginService } from './Services/login-service/login.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './Services/local-storage-service/locastorage.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isOpened = true;
  isLoading = this.loaderService.loading$;
  isLoggedIn = false;
  UserName: string = 'GURU';
  Password: any = '!1234qwer';
  currentRoute!: any;
  isEntered: boolean = false;
  routeModel: any;
  menuList: Observable<MenuModel[]> | any;

  constructor(
    public customTabService: CustomTabService,
    @Inject(DOCUMENT) private document: Document,
    public loginService: LoginService,
    private toaster: ToastrService,
    private router: Router,
    public loaderService: LoaderService,
    private localstoarageService: LocalStorageService,
  ) { }



  ngOnInit(): void {
    this.currentRoute = this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (!this.isEntered) {
          this.isEntered = true;
          if (event.url == '/') this.initializeDefualtRoute();
          else {
            this.getCurrentRouteMenuItem(event.url);
            if (this.routeModel != null)
              this.onListTabsClick(
                this.routeModel.childItem[0],
                this.routeModel.mainmenu
              );
          }
        }
      });
    this.ini();

    const isLogged = this.localstoarageService.getLocalStorage('isLoggedIn');
    this.isLoggedIn = isLogged === 'true';
    // this.initializeDefualtRoute();

    // this.isLoggedIn = this.localstoarageService.getLocalStorage('isLoggedIn') === 'true';
  }

  ini() {
    this.menuList = [
      {
        text: 'Home',
        icon: 'home',
        anyChildSelected: false,
        children: [
          {
            text: 'Home',
            icon: 'home',
            routerLink: '/home',
          }
        ]
      },
      {
        text: 'Dashboard',
        icon: 'dashboard',
        anyChildSelected: false,
        children: [
          {
            text: 'Dashboard',
            icon: 'dashboard',
            routerLink: '/dashboard',
          }
        ]
      },
      {
        text: 'Menu',
        icon: 'admin_panel_settings',
        children: [
          {
            text: 'Case View',
            icon: 'admin_panel_settings',
            routerLink: '/dashboard',
          },
          {
            text: 'Completed Applications',
            icon: 'admin_panel_settings',
            routerLink: '/case-assignment/completed-Applications',
          },
        ],
      }
    ]

    //this.menuList = environment.production ? this.menuList.filter((to: any) => to.text != 'Report' && to.text != 'Case View') : this.menuList
  }


  getCurrentRouteMenuItem(route: string) {
    this.menuList.forEach((mainmenu: any) => {
      let childItem = mainmenu.children.filter(
        (submenu: any) => submenu.routerLink == route
      );
      if (childItem.length > 0) {
        this.routeModel = { mainmenu, childItem };
      }
    });
  }

  handleLoginSuccess() {
    const uName = this.loginService.loginForm.controls.username.value;
    const pass = this.loginService.loginForm.controls.password.value;
    console.log(uName + '&' + pass)
    if (uName == this.UserName && pass == this.Password) {
      // this.isLoggedIn = true;
      this.localstoarageService.setLocalStorage('isLoggedIn', 'true');
      this.document.location.href = 'http://localhost:6200/home';
      // setTimeout(() => {
      //   this.router.navigate(['/dashboard']);
      // }, 200);
      // window.location.reload();
    } else {
      this.toaster.error('Please check credentials');
    }
  }

  initializeDefualtRoute() {
    this.customTabService.removeFromTheList(null!);
  }

  onListOfChildTabClick(value: any, list: any) {
    this.customTabService.addToTheList(value);
  }

  onListTabsClick(value: any, value2: any) {
    this.menuList.forEach((y: any) => {
      if (value2.text == y.text) {
        y.anyChildSelected = true;
      } else {
        y.anyChildSelected = false;
      }
    });
    this.customTabService.addToTheList(value);
  }

  onTabsClicked(event: any) {
    this.menuList.forEach((x: MenuModel) => {
      x.children?.forEach((y: MenuItemModel) => {
        if (y.text == event.text && y.routerLink == event.routerLink) {
          this.onListTabsClick(event, x);
        }
      })
    })
  }

  CurrentItem: MenuItemModel | any;
  OnRemoveClicked(event: MenuModel) {
    if (this.customTabService.tabsList.length == 1) return;
    this.customTabService.removeFromTheList(event);
    this.CurrentItem = this.customTabService.tabsList.find(
      (x) => x.isShow == true
    );
    this.menuList.filter((r: MenuModel) => (r.anyChildSelected = false));
    this.menuList.forEach((y: MenuModel) => {
      y.children?.forEach((z: MenuItemModel) => {
        if (
          z.text == this.CurrentItem.text &&
          z.routerLink == this.CurrentItem.routerLink
        ) {
          y.anyChildSelected = true;
        }
      });
    });
  }

  hideShowSideNav(value: any) {
    this.isOpened = !this.isOpened;
  }

}
