import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http:HttpClient) { }

  public getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`${ this.baseUrl }/Estudiante/ListarEstudiantes`);
  }

  public getStudentById( id: string ): Observable<Student | undefined>{
    return this.http.get<Student>(`${ this.baseUrl }/Estudiante/${ id }`)
    .pipe(
      catchError( error => of( undefined ))
    );
  }

  public addStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(`${ this.baseUrl }/Estudiante/AgregarEstudiante`,student);
  }

  public updateStudent(student: Student): Observable<Student>{
    if(!student.id) throw Error('Student id is required');

    return this.http.put<Student>(`${ this.baseUrl }/Estudiante/ModificarEstudiante/${ student.id}`, student);
  }

  public deleteStudentById(id: number): Observable<boolean>{

    return this.http.delete(`${ this.baseUrl}/Estudiante/EliminarEstudiante/${ id }`)
    .pipe(
      catchError( err => of(false)),
      map( resp => true)
    );
  }
}
