import { createReducer, on } from '@ngrx/store';
import {loadMessagesSuccess, loadMessagesFailure, addMessage, resetMessages} from './messages.actions';
import { Message } from '../models/message.model';

export interface MessageState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}

export const initialState: MessageState = {
  messages: [],
  loading: false,
  error: null,
};

export const messagesReducer = createReducer(
  initialState,
  on(loadMessagesSuccess, (state, { messages }) => ({ ...state, messages, loading: true })),
  on(loadMessagesFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(addMessage, (state) => ({ ...state, loading: true })),
  on(resetMessages, () => initialState)
);
