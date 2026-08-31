import { Pipe, PipeTransform } from '@angular/core';
import { Score } from '../interfaces/score.interface';

@Pipe({
  name: 'scoreImage'
})
export class ScoreImagePipe implements PipeTransform {

  transform(score: Score): string {
      if(!score.id ){
        return 'assets/no-image.png';
      }

      //if(score.altImg) return score.altImg;

      return `${ score.id }.jpg`;
  }

}
