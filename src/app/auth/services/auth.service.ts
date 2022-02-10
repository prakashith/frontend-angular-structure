import { Injectable } from '@angular/core';
import { HttpencapService } from 'src/app/shared/services/httpencap.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public basePath = "auth/v1/user/";
  constructor(private _http:HttpencapService) { }

  login(data:any){
    return this._http.post( `${this.basePath}login`, data );
  }
}
