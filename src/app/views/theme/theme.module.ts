// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { UserListComponent } from '../../area/admin/user/user-list/user-list.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent
  ]
})
export class ThemeModule { }
