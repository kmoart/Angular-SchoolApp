import { Component, OnInit } from '@angular/core';
import { Score } from '../../interfaces/score.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { ScoresService } from '../../services/scores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Student } from '../../interfaces/student.interface';
import { StudentsService } from '../../services/students.service';
import { ProfessorsService } from '../../services/professors.service';

@Component({
  selector: 'app-new-score-page',
  templateUrl: './new-score-page.component.html',
  styleUrl: './new-score-page.component.css'
})
export class NewScorePageComponent implements OnInit{

  public score! : Score;

  public students: Student[] = [];

  public professors: Student[] = [];

  public scoreForm = new FormGroup({
    nombre: new FormControl<string>('', { nonNullable: true }),
    valor: new FormControl<number>(0, { nonNullable: true }),
    idEstudiante: new FormControl<number | null>(null),
    idProfesor: new FormControl<number | null>(null)
  });

  constructor(private scoreService:ScoresService,
    private studentsService: StudentsService,
    private professorsService: ProfessorsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private matDialog : MatDialog
  ){ }

  ngOnInit(): void {

    this.studentsService.getStudents()
    .subscribe({
      next: (students) => {
        this.students = students;
      },
      error: (err) => {
        console.error('Error cargando estudiantes:', err);
      }
    });


  this.professorsService.getProfessors()
    .subscribe({
      next: (professors) => {
        this.professors = professors;
      },
      error: (err) => {
        console.error('Error cargando profesores:', err);
      }
    });


    if (!this.router.url.includes('/editScore') ) return;

      this.activatedRoute.params
      .pipe(
          switchMap( ({id}) => this.scoreService.getScoreById( id ) ),
      ).subscribe( score =>{
        console.log('Score en ngOinit de new Score:', score);
          if( !score ) return this.router.navigateByUrl('/');
          this.score = score;
          this.scoreForm.patchValue({
            nombre: score.nombre,
            valor: score.valor,
            idEstudiante: score.idEstudiante,
            idProfesor: score.idProfesor
          });
          return;
    });

  }

  get currentScore(): Score{
    const score = this.scoreForm.value as Score
    console.log('current Score', score);
    return score;
  }

  onSubmit(): void {
    if( this.scoreForm.invalid) return;

    // Si queremos actualizar
    if (this.router.url.includes('/editScore') ){
      console.log( 'score para actualizar:' , this.currentScore);

      this.score.nombre = this.currentScore.nombre;
      this.score.valor = this.currentScore.valor;
      this.score.idEstudiante = this.currentScore.idEstudiante;
      this.score.idProfesor = this.currentScore.idProfesor;

      this.scoreService.updateScore( this.score )
        .subscribe( score =>{
          this.showSnackbar(`${ this.score.nombre } actualizado!`);
          this.router.navigate(['/institute/listScores']);
      });

      return;// retorna el método y no sigue las siguientes líneas de éste método
    }

    //Si queremos crear
    this.scoreService.addScore( this.currentScore )
      .subscribe( score =>{
          //TODO:Mostrar snackbar, y navegar a /institute/addScore/score.id
          this.showSnackbar(`${ score.nombre } creado!`);
          this.router.navigate(['/institute/listScores'])
        });
  }

  onConfirmDeletion(){
      if( !this.currentScore.nombre && !this.currentScore.valor) throw Error('El nombre y valor de la nota  es requerido!');

      const  dialogRef = this.matDialog.open(ConfirmDialogComponent, {
        data: this.scoreForm.value
      });

      dialogRef.afterClosed().subscribe( result =>{
        if ( !result ) return;

        this.scoreService.deleteScoreById( this.score.id )
        .subscribe( eliminado =>{
          if( eliminado )
            this.router.navigate(['/institute/listScores']);
        });
      });
  }

  showSnackbar( message: string ): void {
      this.snackBar.open( message, 'done', {
          duration : 2500,
      })
  }

}

