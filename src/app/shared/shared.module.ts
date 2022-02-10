import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { ShowErrorsComponent } from './components/show-errors/show-errors.component';

import { LoaderService } from './components/loader/loader.service';
import { JwtHelperServices } from './services/jwt-helper.service';
import { CommonApiService } from './services/common-api.service';
import { SafePipe } from './pipes/safe.pipe';
import { DecimalPipe } from './pipes/decimal.pipe';

import { TruncatePipe } from './pipes/truncate.pipe';



const SHARED_COMPONENTS = [
  SafePipe,
  DecimalPipe,
  TruncatePipe
];

const SINGLETON_SERVICES = [
	LoaderService,
	JwtHelperServices,
  CommonApiService,
];

export const jwtConfig = {
	config: {
        tokenGetter: tokenGetter,
        // headerName: environment.headerName,
        // authScheme: environment.authScheme,
        // throwNoTokenError: false,
        // whitelistedDomains: environment.whitelistedDomains,
        // blacklistedRoutes: environment.blacklistedRoutes,
	},
};
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [   ShowErrorsComponent, ...SHARED_COMPONENTS   ],
  imports: [
    CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		HttpClientModule
  ],
  exports: [
    ShowErrorsComponent,
    CommonModule,
    ...SHARED_COMPONENTS,
  ],
  providers: [
    CommonApiService
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
        ngModule: SharedModule,
        // imports: [],
        providers: [
            ...SINGLETON_SERVICES,
        ],
    };
}
 }
