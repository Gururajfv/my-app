import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CmIconAction } from '../../constants/cm-icon-action';

@Component({
  selector: 'app-icon-action',
  templateUrl: './icon-action.component.html',
  styleUrls: ['./icon-action.component.scss'],
})
export class IconActionComponent implements OnInit {

  @Input() icon?: CmIconAction;
  @Input() freeWidth?: boolean;
  @Input() Hide_edit: boolean = true;

  @Input() isIconColorOne: boolean = false;



  // disabled state
  @Input() @HostBinding('class.cm-disabled') disabled = false;

  constructor() { }

  ngOnInit(): void {

  }
}
