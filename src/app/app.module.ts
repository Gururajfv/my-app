import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from "./modules/header/header.module";
import { MaterialModule } from './modules/material/material.module';
import { GlobalLoaderModule } from "./modules/loader/loader.module";
import { TabModule } from './modules/tabs/custom-tab.module';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './data/constants/loader-interceptor';
import { LoginModule } from './data/components/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HeaderModule,
    MaterialModule,
    GlobalLoaderModule,
    TabModule,
    LoginModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
