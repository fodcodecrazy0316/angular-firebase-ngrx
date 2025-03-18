import {Component, ViewEncapsulation} from '@angular/core';
import {
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import {addMessage, resetMessages} from '../store/messages.actions';
import { Message } from '../models/message.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {randomUUID} from 'crypto';

@Component({
  selector: 'app-messages-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './messages-dialog.component.html',
  styleUrls: ['./messages-dialog.component.scss'],
})
export class MessagesDialogComponent {
  messageForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialogRef: MatDialogRef<MessagesDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.messageForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required]],
      });
  }

  onSubmit() {
    if (this.messageForm.valid) {
      let message: Message = this.messageForm.value;
      message.id =  crypto.randomUUID();
      message.date = (new Date()).getTime();
      this.store.dispatch(addMessage({ message }));
      this.dialogRef.close();
    } else {
      this.snackBar.open('Form is invalid. Please check your inputs.', 'Close', {
        duration: 2000,
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
