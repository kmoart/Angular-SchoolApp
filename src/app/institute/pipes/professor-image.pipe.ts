import { Pipe, PipeTransform } from '@angular/core';
import { Professor } from '../interfaces/professor.interface';

@Pipe({
  name: 'professorImage'
})
export class ProfessorImagePipe implements PipeTransform {

  transform(professor: Professor): string {
    if(!professor.id && !professor.altImg){
      return 'assets/no-image.png';
    }

    if(professor.altImg) return professor.altImg;

    return `${ professor.altImg }.jpg`;
  }

}
