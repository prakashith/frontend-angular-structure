import { Injectable } from '@angular/core';
import { HttpencapService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http:HttpencapService) { }

  /**
   * 
   * @param data data in key value format
   */
  adduser(data){
    this._http.get("localhost:8000/user/v1/add", data)
  }
}
