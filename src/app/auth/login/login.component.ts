import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiService, FormValidatorService, LoaderService } from 'src/app/shared/services';
import { AuthService } from '../services/auth.service';
import { Constants } from 'src/app/config/constant';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
	constructor(
		public router:Router, 
		public shared:CommonApiService,
		private validator:FormValidatorService,
		private loaderservice:LoaderService,
		public fb: FormBuilder,
		private authService:AuthService
	) { }

	ngOnInit(): void {
		this.createForm();
	}
	createForm(){
		this.loginForm = this.fb.group({
			email: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required])
		})
	}
	get email() { return this.loginForm.get('email'); }
	get password() { return this.loginForm.get('password'); }


	login(value){
		if (this.loginForm.invalid) {
			this.validator.markControlsTouched(this.loginForm)
			return;
		}
		
		return;
		let DTS = {
			provider: 'email',
			password:value.password,
			email:value.email
		}
		this.loaderservice.show();
		this.authService.login(DTS).subscribe((res:any)=> {
			this.loaderservice.hide();
			if(res.error){
				
			}else{

				if(res?.data?.user?.role){
					this.shared.setUserLoggedIn(res.data);
					this.router.navigate([`main/category`]);
				}else{
					
				}
			}
		}, err => {
			
			this.loaderservice.hide();
		});
	}

}
