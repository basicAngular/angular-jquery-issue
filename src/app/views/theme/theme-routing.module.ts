import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { UserListComponent } from '../../area/admin/user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: 'users',
        component: UserListComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
