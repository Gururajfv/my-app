import { Component, Input, OnInit } from '@angular/core';
import { IconBaseComponent } from '../icon-base/icon-base.component';

@Component({
  selector: 'app-icon-data-enrichment',
  templateUrl: './icon-data-enrichment.component.html',
  styleUrls: ['./icon-data-enrichment.component.scss'],
})
export class IconDataEnrichmentComponent
  extends IconBaseComponent
  implements OnInit
{

  @Input() isIconColorOne: boolean = false;

  constructor() {
    super();
  }
}
