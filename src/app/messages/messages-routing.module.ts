import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import {MessagesListComponent} from './messages-list/messages-list.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      {
        path: '',
        pathMatch: "full",
        redirectTo: "list"
      },
      {
        path: 'list',
        component: MessagesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
