import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGaurdService as AuthGuard } from '../shared/services';
const routes: Routes = [
  // canActivate: [AuthGuard], canActivateChild: [AuthGuard], 
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
