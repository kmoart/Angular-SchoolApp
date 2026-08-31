import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Score } from '../interfaces/score.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http:HttpClient) { }

  public getScores():Observable<Score[]>{
        return this.http.get<Score[]>(`${ this.baseUrl }/Nota/ListarNotas`);
  }

  public getScoreById( id: string ): Observable<Score | undefined>{
        return this.http.get<Score>(`${ this.baseUrl }/Nota/ObtenerNota/${ id }`)
        .pipe(
          catchError( error => of( undefined ))
        );
  }

  public addScore(score: Score): Observable<Score>{
        return this.http.post<Score>(`${ this.baseUrl }/Nota/AgregarNota`,score);
  }

  public updateScore(score: Score): Observable<Score>{
        if(!score.id) throw Error('Score id is required');
        return this.http.put<Score>(`${ this.baseUrl }/Nota/ModificarNota/${ score.id}`, score);
  }

  public deleteScoreById(id: number): Observable<boolean>{

        return this.http.delete(`${ this.baseUrl}/Nota/EliminarNota/${ id }`)
        .pipe(
          catchError( err => of(false)),
          map( resp => true)
        );
  }
}
