import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {getApp, getApps, initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import {environment} from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {provideState, provideStore, StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {messagesReducer} from './messages/store/messages.reducer';
import {provideEffects} from '@ngrx/effects';
import {MessagesEffects} from './messages/store/messages.effects';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MessagesComponent} from './messages/messages.component';
import {MessagesModule} from './messages/messages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MessagesModule
  ],
  providers: [
    provideStore(),
    provideState('messages', messagesReducer),
    provideEffects(MessagesEffects),
    provideAnimations(),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => !getApps().length ? initializeApp(environment.firebaseConfig) : getApp()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    // provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
