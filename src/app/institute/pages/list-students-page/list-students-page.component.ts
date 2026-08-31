import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { StudentsService } from '../../services/students.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-students-page',
  templateUrl: './list-students-page.component.html',
  styleUrl: './list-students-page.component.css'
})
export class ListStudentsPageComponent implements OnInit{

  public students: Student[] = [];

  //Estudiantes que se muestran actualmente
  public paginatedStudents: Student[] = [];

  //Configuración de paginación
  public pageSize = 6;
  public pageIndex = 0;

  constructor(private studentsService: StudentsService){}

  ngOnInit(): void {
      this.studentsService.getStudents()
        .subscribe({
          next: (response:Student[]) =>{
            this.students = response;

            this.updatePaginatedStudents();
          },
          error:(err) =>{
            console.error( err );
          }
        });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.updatePaginatedStudents();
  }

  private updatePaginatedStudents(): void{

    const startIndex = this.pageIndex * this.pageSize;

    const endIndex = startIndex + this.pageSize;

    this.paginatedStudents =
          this.students.slice(startIndex,endIndex);
  }

}
