import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot} from '@angular/router';
import { JwtHelperServices } from './jwt-helper.service';
import { CommonApiService } from './common-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(
    private jwtHelper: JwtHelperServices, 
    private router: Router, 
    private sharedService: CommonApiService
  ){
    
  }
  
  canActivate(): boolean {
    if (this.jwtHelper.isTokenExpired) {
      window.localStorage.removeItem('_u');
      window.localStorage.removeItem('token');
      this.router.navigate(['auth']);
      return false;
    }
    
    this.sharedService.isUserLoggedIn();
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    if (this.jwtHelper.isTokenExpired) {
      window.localStorage.removeItem('_u');
      window.localStorage.removeItem('token');
      this.router.navigate(['auth']);
      return false;
    }
      return true;
  }
}
