import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpContextToken } from '@angular/common/http';
import { LoaderService } from 'src/app/Services/loader-service/loader.service';

// export const IS_LOADINGGG = new HttpContextToken<boolean>(() => false);

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.loaderService.show(); // Show loader when a request starts
  
      return next.handle(req).pipe(
        finalize(() => {
          this.loaderService.hide(); // Hide loader when the request completes
        })
      );
    }
}
