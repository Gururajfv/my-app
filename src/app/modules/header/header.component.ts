import { DOCUMENT } from "@angular/common";
import { Component, EventEmitter, Inject, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/Services/local-storage-service/locastorage.service";

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @Output() onSelectedClick = new EventEmitter<void>();
  username: string = 'GURU';
  constructor(
    private localstorageService: LocalStorageService,
    public router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }
  ngOnInit(): void {
  }

  logout(): void {
    this.localstorageService.removeItem('isLoggedIn');
    // this.localstorageService.setLocalStorage('isLoggedIn', 'true')
    this.document.location.href = 'http://localhost:6200/login';
    // this.router.navigate(['/login']);
    // window.location.reload();  
  }

  onSelected(value: any) {
    this.onSelectedClick.emit(value);
  }
}