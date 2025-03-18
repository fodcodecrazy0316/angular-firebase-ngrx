import {Component, inject} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Message} from '../models/message.model';
import {loadMessages} from '../store/messages.actions';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss',
  standalone: false
})
export class MessagesListComponent {
  load: boolean;
  messages$: Observable<Message[]>;
  messageData: any;
  constructor(private store: Store) {
    this.load = false
    let _store = inject(Store)
    this.messages$ = _store.select('messages');
    this.messages$.subscribe((data: any) => {
      this.messageData = data.messages;
      this.load = data.loading;
      console.log("data is ", data);
    });

    this.store.dispatch(loadMessages());
  }
}
