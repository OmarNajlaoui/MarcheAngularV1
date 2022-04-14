import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import {from, pipe, switchMap} from 'rxjs'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);
  constructor(private auth:Auth) { }
  login(email:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,email,password));
  }
  signUp(name:string,email:string,password:string){
    return from(createUserWithEmailAndPassword(this.auth,email,password)).pipe
    (switchMap(({user})=>updateProfile(user,{displayName:name})))

  }
  
  logout(){
    return from(this.auth.signOut());
  }
}
