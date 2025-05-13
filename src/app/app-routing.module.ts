import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./data/components/login/login.module').then(
        (m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    // canActivate: [AuthGuard, RoleAccessGuard],
    // data: {
    //   acl_id: RoleAccessACLConstant.Dashboards,
    //   access_Levels: [Accesslevel.edit, Accesslevel.view]
    // },
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(
      (m) => m.HomeModule
    )
  },
  {
    path: 'pagenotfound',
    loadChildren: () => import('./data/components/page-not-found/page-not-found.module').then(
      (m) => m.PageNotFoundModule
    )
  },
  { path: '**', redirectTo: 'pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
