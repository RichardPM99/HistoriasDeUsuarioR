import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseAuth } from '@angular/fire';
import { auth } from 'firebase';
import { pipe, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: any;
  dataUser: any;
  user: any;
  isLoggedIn: boolean;
  redirectUrl: String;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {

    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.cargarData();
      } else {
        localStorage.setItem('user', null);
        this.isLoggedIn = false;
      }
    });
  }
  // obtiene los datos del localStorage en caso de que exista un registro persistente en el cache del navegador
  cargarData() {
    this.data = localStorage.getItem('user');
    this.dataUser = JSON.parse(this.data);
  }

  async loginFirebase (user, password) {
    try {
      await this.fireAuth.auth.signInWithEmailAndPassword(user, password).then((res)=>{
        this.dataUser = res.user;
      }).finally(()=>{
        this.isLoggedIn = true;
      });
      this.router.navigate(['/home']);
      
    } catch (e) {
      alert(e.message);
    }
  }

  async registroFirebase (user, password) {
    try {
    await this.fireAuth.auth.createUserWithEmailAndPassword(user, password);
    } catch (error) {
      
    }
  }

  async firebaseAuthLogin (popup) {
    try{
    await this.fireAuth.auth.signInWithPopup(popup).then((res)=>{
      console.log('You are logged in' + JSON.stringify(res));
      
    });
    this.router.navigate(['/home']);
    } catch (e) {

    }
  }

  firebaseGoogle () {
    var popup = new auth.GoogleAuthProvider();
    this.firebaseAuthLogin(popup);
  }

  async logoutFirebase() {
    await this.fireAuth.auth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
