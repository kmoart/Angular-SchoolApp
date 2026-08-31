import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent implements OnInit{

  public student?: Student;

  constructor(
    private studentService: StudentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          delay(1000),
            switchMap( ({ id }) => this.studentService.getStudentById( id ) ),
        )
        .subscribe ( student  => {
          if ( !student ) return this.router.navigate(['/institute/listStudents'])

          this.student = student;
          return;
        })
  }

  public goBack(): void {
    this.router.navigateByUrl('institute/listStudents')
  }

}
