import { Component, Input, OnInit } from '@angular/core';
import { Score } from '../../interfaces/score.interface';

@Component({
  selector: 'scores-score-card',
  templateUrl: './score-card.component.html',
  styleUrl: './score-card.component.css'
})
export class ScoreCardComponent implements OnInit{

  @Input()
  public score!: Score;

  ngOnInit(): void {
      if( !this.score ) throw Error('Score property is required!');
  }

}
