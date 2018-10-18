import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//MAterial
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';




//firebase
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { Ite1Component } from './ite1/ite1.component';
import { Ite2Component } from './ite2/ite2.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterBeaconComponent } from './admin/register-beacon/register-beacon.component';


const appRoutes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'ite1', component: Ite1Component},
  { path: 'ite2', component: Ite2Component},
];

@NgModule({
  declarations: [
    AppComponent,
    Ite1Component,
    Ite2Component,
    AdminComponent,
    RegisterBeaconComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
