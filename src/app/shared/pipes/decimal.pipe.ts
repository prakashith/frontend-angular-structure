import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value) {
    if(value){
      let valueArray = (value.toString().split('.'));
      let firstvalue = valueArray[0];
      let secondValue = "";
      if(valueArray[1]){
        secondValue = "."+valueArray[1].slice(0,4);
      }
      return (firstvalue+secondValue);
    }else{
      return value;
    }
    
  }

}
