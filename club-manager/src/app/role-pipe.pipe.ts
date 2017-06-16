import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';


@Pipe({
  name: 'rolePipe',
  pure: false
})
export class RolePipePipe implements PipeTransform {
    transform(input: Member[], role) {
      var output: Member[] = [];
      if(role === "Commissioner") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].role === role) {
           output.push(input[i]);
         }
       }
       return output;
     } else if (role === "Member") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].role === role){
           output.push(input[i]);
         }
       }
       return output;
      } else {
       return input;
      }
    }
  }
