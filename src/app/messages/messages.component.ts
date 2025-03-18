import {Component, inject, ViewEncapsulation} from '@angular/core';
import {MessagesDialogComponent} from './messages-dialog/messages-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {Message} from './models/message.model';
import {Store} from '@ngrx/store';
import {selectMessages} from './store/messages.selectors';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  private store = inject(Store);
  messages$: Observable<Message[]>;

  constructor(private dialog: MatDialog) {
    this.messages$ = this.store.select(selectMessages);
  }

  openDialog() {
    this.dialog.open(MessagesDialogComponent);
  }
}
