import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGroupComponent } from "./posts/list-group/list-group.component";
import { CreatePostComponent } from "./posts/create-post/create-post.component";


const routes: Routes = [
  { path: '', component: ListGroupComponent },
  { path: 'create', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
