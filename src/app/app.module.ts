import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { jwtConfig, SharedModule } from './shared/shared.module';

import { LoaderComponent } from './shared/components/loader/loader.component';
import { AppInterceptorService } from './shared/services/app-interceptor.service';
import { CommonApiService } from './shared/services/common-api.service';



export const httpInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptorService,
    multi: true },
];
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    JwtModule.forRoot(jwtConfig)
    
  ],
  providers: [
    CommonApiService,
    httpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
