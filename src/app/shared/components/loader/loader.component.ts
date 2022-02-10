import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader-model';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;
  subscription: Subscription;
  forResume = false;
  subscriptionResume: Subscription;
  forRoute = false;
  subscriptionRoute: Subscription;
  constructor(private loaderService: LoaderService) {
   }

   ngOnInit() {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionResume.unsubscribe();
    this.subscriptionRoute.unsubscribe();
  }
}
