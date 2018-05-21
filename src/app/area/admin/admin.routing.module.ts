import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { EnterprisesListComponent } from './enterprises/enterprises-list/enterprises-list.component';

export const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      title: 'Users'
    }
  },
  {
    path: 'enterprises',
    component: EnterprisesListComponent,
    data: {
      title: 'Enterprises'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
