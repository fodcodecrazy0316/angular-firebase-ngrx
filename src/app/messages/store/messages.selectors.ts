import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessageState } from './messages.reducer';

// ✅ Select the entire messages state
export const selectMessagesState = createFeatureSelector<MessageState>('messages');

// ✅ Select messages from the state
export const selectMessages = createSelector(
  selectMessagesState,
  (state) => state.messages
);
