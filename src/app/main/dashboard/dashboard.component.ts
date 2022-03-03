import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }
  /**
   * 
   * @param name Name of user
   * @param email Email of user
   * @param mobile Mobile of user
   */
  addData(name, email, mobile){
    let dataToSave = {
      name:name,
      email:email,
      mobile:mobile
    }
    this.mainService.adduser(dataToSave)
  }
}
