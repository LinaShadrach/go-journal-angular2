import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'mostPopular'
})
export class MostPopularPipe implements PipeTransform {

  transform(input: Project[]){
    var output: Project[]=[];
    if(input!==null)
    {
      var maxPop = 0;
      for(var i=0; i<input.length; i++){
        if(input[i].popularity>maxPop){
          output = [];
          output.push(input[i]);
          maxPop=input[i].popularity;
          console.log("in if");
        }
      }
      return output;
    }
    else {
      console.log("else if");
      return output;
    }
  }
}
