import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from '../blogs/blog-list/blog-list.component';

export const routes: Routes = [
  {
    path: 'blog-list',
    component: BlogListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
