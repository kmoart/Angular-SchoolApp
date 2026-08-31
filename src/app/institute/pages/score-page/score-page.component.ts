import { Component, OnInit } from '@angular/core';
import { Score } from '../../interfaces/score.interface';
import { ScoresService } from '../../services/scores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrl: './score-page.component.css'
})
export class ScorePageComponent implements OnInit{

  public score?: Score;

  constructor(
    private scoreService: ScoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          delay(1000),
            switchMap( ({ id }) => this.scoreService.getScoreById( id ) ),
        )
        .subscribe ( score  => {
          if ( !score ) return this.router.navigate(['/institute/listScores'])

          this.score = score;
          return;
        })
  }

  public goBack(): void {
    this.router.navigateByUrl('institute/listScores')
  }

}
