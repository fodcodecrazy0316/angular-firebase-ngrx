import { NgModule } from '@angular/core';

import { MessagesRoutingModule } from './messages-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MessagesListComponent} from './messages-list/messages-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {MessagesComponent} from './messages.component';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    MessagesComponent,
    MessagesListComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    MessagesComponent
  ]
})
export class MessagesModule { }
