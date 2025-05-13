import { Component } from "@angular/core";
import { LoaderService } from "src/app/Services/loader-service/loader.service";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
  })
  export class LoaderComponent {
  
    // isLoading = this.loaderService.loading$;
  
    constructor(private loaderService: LoaderService,) { }
  
  }