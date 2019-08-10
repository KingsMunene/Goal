import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecount'
})
export class TimecountPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    let today:Date = new Date();
    let dateWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference:any = Math.abs(value-dateWithoutTime); //returns value in miliseconds
    
    const secondsInADay = 86400;

    var dateDifferenceInSeconds = dateDifference*0.001; //miliseconds to seconds
    var dateCounter = dateDifferenceInSeconds/secondsInADay;

    if(dateCounter >= 1 && value > dateWithoutTime){
      return dateCounter
    }else{

    return 0;
    }
  }

}
