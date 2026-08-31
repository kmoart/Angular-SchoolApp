import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../interfaces/student.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-student-page',
  templateUrl: './new-student-page.component.html',
  styleUrl: './new-student-page.component.css'
})
export class NewStudentPageComponent implements OnInit{

  public student! : Student;

  public studentForm = new FormGroup({
    nombre: new FormControl<String>(''),
    altImg: new FormControl<String>('')
  });

  constructor(private studentService:StudentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private matDialog : MatDialog
  ){ }

  ngOnInit(): void {
      if (!this.router.url.includes('/editStudent') ) return;

      this.activatedRoute.params
      .pipe(
          switchMap( ({id}) => this.studentService.getStudentById( id ) ),
      ).subscribe( student =>{
        console.log('Estudiante en ngOinit de new Student:', student);
          if( !student ) return this.router.navigateByUrl('/');
          this.student = student;
          this.studentForm.reset( student );
          return;
      });

  }

  get currentStudent(): Student{
    const student = this.studentForm.value as Student
    console.log('current Student', student);
    return student;
  }

  onSubmit(): void {
    if( this.studentForm.invalid) return;

    // Si queremos actualizar
    if (this.router.url.includes('/editStudent') ){
      console.log( 'student para actualizar:' , this.currentStudent);

      this.student.nombre = this.currentStudent.nombre;
      this.student.altImg = this.currentStudent.altImg;

      this.studentService.updateStudent( this.student )
        .subscribe( student =>{
          this.showSnackbar(`${ this.student.nombre } actualizado!`);
          this.router.navigate(['/institute/listStudents'])
        });

        return;// retorna el método y no sigue las siguientes líneas de éste método
    }

    //Si queremos crear
    this.studentService.addStudent( this.currentStudent )
      .subscribe( student =>{
          //TODO:Mostrar snackbar, y navegar a /institute/addStudent/student.id
          this.showSnackbar(`${ student.nombre } creado!`);
          this.router.navigate(['/institute/listStudents'])
        });
  }

  onConfirmDeletion(){
      if( !this.currentStudent.nombre ) throw Error('El nombre del estudiante es requerido!');

      const  dialogRef = this.matDialog.open(ConfirmDialogComponent, {
        data: this.studentForm.value
      });

      dialogRef.afterClosed().subscribe( result =>{
        if ( !result ) return;

        this.studentService.deleteStudentById( this.student.id )
        .subscribe( eliminado =>{
          if( eliminado )
            this.router.navigate(['/institute/listStudents']);
        });
      });
  }

  showSnackbar( message: string ): void {
      this.snackBar.open( message, 'done', {
          duration : 2500,
      })
  }

}
