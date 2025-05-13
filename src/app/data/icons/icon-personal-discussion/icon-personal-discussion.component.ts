import { Component, OnInit } from '@angular/core';
import { IconBaseComponent } from '../icon-base/icon-base.component';

@Component({
  selector: 'app-icon-personal-discussion',
  templateUrl: './icon-personal-discussion.component.html',
  styleUrls: ['./icon-personal-discussion.component.scss'],
})
export class IconPersonalDiscussionComponent
  extends IconBaseComponent
  implements OnInit
{
  constructor() {
    super();
  }
}
