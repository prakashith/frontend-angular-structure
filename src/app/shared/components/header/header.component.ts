import { Component, OnInit } from '@angular/core';
import { CommonApiService } from '../../services';
declare var jQuery: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public sharedService:CommonApiService) { }

  ngOnInit(): void {
    // Toggle the side navigation
    (function ($) {
      $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
    // SideBar click on hide menu
    
    $(document).ready(function(e){
      $('.sb-sidenav-menu a').on('click', function(e){
        e.preventDefault();
        $("body").removeClass("sb-sidenav-toggled");
      });
      });
    })(jQuery);
    
  
  }
  logout(){
    this.sharedService.logout();
  }

}
