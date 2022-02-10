import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {
  
  private static readonly errorMessages = {
    'required': (param?) => `${param} is required`,
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'Please Enter a valid value',
    'min': (params) => `Atleast ${params.min} is required in this field`,
    'max': (params) => `Max value can be ${params.max} only`,
    'ngxEditor': (params)=> `The max allowed number of characters is ${params.allowedLength} and curent characters are ${params.textLength}`
  };

  @Input()
  public control: AbstractControlDirective | AbstractControl;
  @Input() fname = "";

  constructor() { }

  ngOnInit() {
  }
  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    if(type == "required"){
      if(this.fname){
        params = this.fname;
      }else{
        params = 'This field';
        } 
    }
    return ShowErrorsComponent.errorMessages[type](params);
  }
}
