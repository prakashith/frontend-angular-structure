import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../../../config/constant';


declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
 
  
  constructor(
    // private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    
  ) {}


  ngOnInit() {

  }
}
