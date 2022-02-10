import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpencapService } from './httpencap.service';

// import { Constants } from './../../config/constant';
// import { HttpService } from './api/http.service'

@Injectable({
  providedIn: 'root'
})
export class CommonApiService  {

  public isUserLogin = false;

  public isAdmin = false;
  public currentUser: any;
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public currentUserId: any;

  public currentProfileImage = null
  constructor(public _http: HttpencapService, public _route: Router, public jwtHelper: JwtHelperService) {
  }

  /************************************ SETTERS & GETTERS SECTION STARTS ************************************/

  public setUserLoggedIn(data): void {
    this.currentUser = data.user;
    window.localStorage.setItem('_u', JSON.stringify(data.user));
    window.localStorage.setItem('token', data.token);
    this.isLoggedIn.next(true);
  }

  public unsetUserLoggedIn(): void {
    this.isLoggedIn.next(false);
  }

  public isUserLoggedIn(): Boolean {
    let user = window.localStorage.getItem('_u');
    let token = window.localStorage.getItem('token');
    this.currentUser = (user) ? JSON.parse(user) : {};
    if (Object.keys(this.currentUser).length && token) {
      this.isLoggedIn.next(true);
      return true;
    } else {
      this.isLoggedIn.next(false);
      return false;
    }
  }

  public getUserLoggedIn() {
    return this.isUserLogin;
  }
  
  public getUserRole(): string {
    return this.currentUser.role.toString().toLowerCase();
  }

  public getToken(): string {
    return window.localStorage.getItem('token');
  }

  public getCurrentUserId(): string {
    let user = window.localStorage.getItem('_u');
    let userObj = JSON.parse(user);
    this.currentUserId = userObj?.accountId;
    return this.currentUserId;
  }

  public getUUid(): string {
    let uuid = this.jwtHelper.decodeToken(window.localStorage.getItem('token')).uuid;
    return uuid;
  }

  public getCurrentUser(): any {
    let user = window.localStorage.getItem('_u');
    return (user) ? (JSON.parse(window.localStorage.getItem('_u'))) : null;
  }

  public logout(): void {
    window.localStorage.clear();
    this.currentUser = null;
    this.isLoggedIn.next(false);
    this._route.navigate(['/auth']);

  }

  public getAuthToken(): string {
    return window.localStorage.getItem('token');
  }
  
  public removeAll(): void {
    window.localStorage.clear();
  }
  
  public decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken('token');
  }

  public setCurrentUser(decodedUser) {
    this.isLoggedIn.next(true);
    this.currentUser.id = decodedUser.id;
    this.currentUser.name = decodedUser.name;
    this.currentUser.email = decodedUser.email;
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
    decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.role;
  }

  public fetchFileExtention(fileName) {
    return fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);
  }

  public getSize(fileData) {

  return new Promise(resolve => {
    var img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      resolve({ height: height, width: width });
    };
    img.src = fileData;
  });

  }
}

