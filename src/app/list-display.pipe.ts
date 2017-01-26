import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listDisplay'
})
export class ListDisplayPipe implements PipeTransform {

  transform(input, keys: string[]): any {
    var output;
    if(input!==null) {
      for(var i =0; i < input.length; i++) {
    }
    } else {
      return output;

  }

}
}
