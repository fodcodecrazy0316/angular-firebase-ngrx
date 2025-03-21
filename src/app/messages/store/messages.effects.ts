import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as MessageActions from './messages.actions';

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$: Actions,
    private firestore: Firestore
  ) {}

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.loadMessages),
      mergeMap(() =>
        collectionData(collection(this.firestore, 'messages'), { idField: 'id' }).pipe(
          map((messages: any ) => MessageActions.loadMessagesSuccess({ messages })),
          catchError((error) => of(MessageActions.loadMessagesFailure({ error: error.message })))
        )
      )
    )
  );

  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.addMessage),
      mergeMap((action) => {
        const messageRef = collection(this.firestore, 'messages');
        return addDoc(messageRef, action.message).then(() =>
          MessageActions.addMessageSuccess()
        );
      })
    )
  );
}
