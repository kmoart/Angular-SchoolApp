import { Component, OnInit } from '@angular/core';
import { Professor } from '../../interfaces/professor.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfessorsService } from '../../services/professors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-professor-page',
  templateUrl: './new-professor-page.component.html',
  styleUrl: './new-professor-page.component.css'
})
export class NewProfessorPageComponent implements OnInit{

  public professor! : Professor;

  public professorForm = new FormGroup({
    nombre: new FormControl<String>(''),
    altImg: new FormControl<String>('')
  });

  constructor(private professorService:ProfessorsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private matDialog : MatDialog
  ){ }

  ngOnInit(): void {
      if (!this.router.url.includes('/editProfessor') ) return;

      this.activatedRoute.params
      .pipe(
          switchMap( ({id}) => this.professorService.getProfessorById( id ) ),
      ).subscribe( professor =>{
        console.log('Profesor en ngOinit de new Professor:', professor);
          if( !professor ) return this.router.navigateByUrl('/');
          this.professor = professor;
          this.professorForm.reset( professor );
          return;
      });

  }

  get currentProfessor(): Professor{
    const professor = this.professorForm.value as Professor
    console.log('current Professor', professor);
    return professor;
  }

  onSubmit(): void {
    if( this.professorForm.invalid) return;

    // Si queremos actualizar
    if (this.router.url.includes('/editProfessor') ){
      console.log( 'professor para actualizar:' , this.currentProfessor);

      this.professor.nombre = this.currentProfessor.nombre;
      this.professor.altImg = this.currentProfessor.altImg;

      this.professorService.updateProfessor( this.professor )
        .subscribe( student =>{
          this.showSnackbar(`${ this.professor.nombre } actualizado!`);
          this.router.navigate(['/institute/listProfessors']);
      });

      return;// retorna el método y no sigue las siguientes líneas de éste método
    }

    //Si queremos crear
    this.professorService.addProfessor( this.currentProfessor )
      .subscribe( professor =>{
          //TODO:Mostrar snackbar, y navegar a /institute/addProfessor/professor.id
          this.showSnackbar(`${ professor.nombre } creado!`);
          this.router.navigate(['/institute/listProfessors'])
        });
  }

  onConfirmDeletion(){
      if( !this.currentProfessor.nombre ) throw Error('El nombre del profesor es requerido!');

      const  dialogRef = this.matDialog.open(ConfirmDialogComponent, {
        data: this.professorForm.value
      });

      dialogRef.afterClosed().subscribe(result => {

    if (!result) return;

    this.professorService.deleteProfessorById(this.professor.id)
      .subscribe({

        next: () => {

          this.showSnackbar(
            `${this.professor.nombre} eliminado!`
          );

          this.router.navigate(
            ['/institute/listProfessors']
          );

        },

        error: (err) => {

          console.error('Error al eliminar profesor:', err);

          if (err.status === 409) {

            this.showSnackbar(
              'No se puede eliminar el profesor porque tiene una nota asociada.'
            );

            return;
          }

          this.showSnackbar(
            'No se pudo eliminar el profesor.'
          );

        }

      });

    });
  }

  showSnackbar( message: string ): void {
      this.snackBar.open( message, 'done', {
          duration : 2500,
      })
  }

}
