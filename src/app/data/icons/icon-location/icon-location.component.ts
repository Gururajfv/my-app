import { Component, Input, OnInit } from '@angular/core';
import { IconBaseComponent } from '../icon-base/icon-base.component';

@Component({
  selector: 'app-icon-location',
  templateUrl: './icon-location.component.html',
  styleUrls: ['./icon-location.component.scss']
})
export class IconLocationComponent extends IconBaseComponent{
@Input() heightInPixels: any;
@Input() customHeight : String = "20";
@Input() customWidth: String = "20";

  constructor() { 
    super();
  }


}
