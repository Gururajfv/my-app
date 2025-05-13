import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private requestCount = 0;
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();
  
    show(): void {
      this.requestCount++;
      if (this.requestCount === 1) {
        this.loadingSubject.next(true); // Show loader on first request
      }
    }
  
    hide(): void {
      this.requestCount--;
      if (this.requestCount === 0) {
        this.loadingSubject.next(false); // Hide loader when no pending requests
      }
    }
  
    reset(): void {
      this.requestCount = 0;
      this.loadingSubject.next(false); // Forcefully reset loader in case of error
    }
}