import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import { BusquedaComponent } from './Acces/busqueda/busqueda.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { PageNotAvailableComponent } from './page-not-available/page-not-available.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Acces/page-not-found/page-not-found.component';

var firebaseConfig = {
  apiKey: "AIzaSyDYI3QCZPUcyWT3C0cmfn8uhVyXvcJMChw",
  authDomain: "emperador-41783.firebaseapp.com",
  databaseURL: "https://emperador-41783.firebaseio.com",
  projectId: "emperador-41783",
  storageBucket: "emperador-41783.appspot.com",
  messagingSenderId: "461914858559",
  appId: "1:461914858559:web:634d6041e515444ffe048a"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BusquedaComponent,
    PageNotAvailableComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
