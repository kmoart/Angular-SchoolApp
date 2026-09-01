import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Professor } from '../interfaces/professor.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http:HttpClient ) { }

  public getProfessors():Observable<Professor[]>{
      return this.http.get<Professor[]>(`${ this.baseUrl }/Profesor/ListarProfesores`);
  }

  public getProfessorById( id: string ): Observable<Professor | undefined>{
      return this.http.get<Professor>(`${ this.baseUrl }/Profesor/ObtenerProfesor/${ id }`)
      .pipe(
        catchError( error => of( undefined ))
      );
  }

  public addProfessor(professor: Professor): Observable<Professor>{
      return this.http.post<Professor>(`${ this.baseUrl }/Profesor/AgregarProfesor`,professor);
  }

  public updateProfessor(professor: Professor): Observable<Professor>{
      if(!professor.id) throw Error('Professor id is required');

      return this.http.put<Professor>(`${ this.baseUrl }/Profesor/ModificarProfesor/${ professor.id}`, professor);
  }

  public deleteProfessorById(id: number): Observable<void>{

      return this.http.delete<void>(`${ this.baseUrl}/Profesor/EliminarProfesor/${ id }`)

  }
}
