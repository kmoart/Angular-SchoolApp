import { Component, OnInit } from '@angular/core';
import { Score } from '../../interfaces/score.interface';
import { ScoresService } from '../../services/scores.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-scores-page',
  templateUrl: './list-scores-page.component.html',
  styleUrl: './list-scores-page.component.css'
})
export class ListScoresPageComponent implements OnInit{

  public scores: Score[] = [];

  //Notas que se muestran para paginación
  public paginatedScores: Score[] = [];

  //Configuración de paginación
  public pageSize = 7;
  public pageIndex = 0;

  public displayedColumns: string[] = [
    'id',
    'Asignatura',
    'Estudiante',
    'Profesor',
    'valor',
    'acciones'
  ];


  constructor(private scoresService: ScoresService){}

  ngOnInit(): void {
      this.scoresService.getScores()
        .subscribe({
          next: (response:Score[]) =>{
            this.scores = response;

            this.updatePaginatedScores();
          },
          error:(err) =>{
            console.error( err );
          }
        });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.updatePaginatedScores();
  }

  private updatePaginatedScores(): void{

    const startIndex = this.pageIndex * this.pageSize;

    const endIndex = startIndex + this.pageSize;

    this.paginatedScores =
          this.scores.slice(startIndex,endIndex);
  }

}
