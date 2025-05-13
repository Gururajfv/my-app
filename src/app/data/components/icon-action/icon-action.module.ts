import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconActionComponent } from './icon-action.component';
import { IconsModule } from '../../icons/icons.module';

@NgModule({
  declarations: [IconActionComponent],
  exports: [IconActionComponent],
  imports: [CommonModule, IconsModule],
})
export class IconActionModule {}
