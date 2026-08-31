import { Component, OnInit } from '@angular/core';
import { Professor } from '../../interfaces/professor.interface';
import { ProfessorsService } from '../../services/professors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrl: './professor-page.component.css'
})
export class ProfessorPageComponent implements OnInit{

  public professor?: Professor;

  constructor(
    private studentService: ProfessorsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          delay(1000),
            switchMap( ({ id }) => this.studentService.getProfessorById( id ) ),
        )
        .subscribe ( professor  => {
          if ( !professor ) return this.router.navigate(['/institute/listProfessors'])

          this.professor = professor;
          return;
        })
  }

  public goBack(): void {
    this.router.navigateByUrl('institute/listProfessors')
  }

}
