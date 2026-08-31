import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListStudentsPageComponent } from './pages/list-students-page/list-students-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { NewStudentPageComponent } from './pages/new-student-page/new-student-page.component';
import { SearchStudentPageComponent } from './pages/search-student-page/search-student-page.component';
import { ListProfessorsPageComponent } from './pages/list-professors-page/list-professors-page.component';
import { ProfessorPageComponent } from './pages/professor-page/professor-page.component';
import { NewProfessorPageComponent } from './pages/new-professor-page/new-professor-page.component';
import { SearchProffesorPageComponent } from './pages/search-proffesor-page/search-proffesor-page.component';
import { ListScoresPageComponent } from './pages/list-scores-page/list-scores-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { NewScorePageComponent } from './pages/new-score-page/new-score-page.component';
import { SearchScorePageComponent } from './pages/search-score-page/search-score-page.component';
import { InstituteRoutingModule } from './institute-routing.module';
import { MaterialModule } from '../material/material.module';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { StudentImagePipe } from './pipes/student-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ProfessorImagePipe } from './pipes/professor-image.pipe';
import { ProfessorCardComponent } from './components/professor-card/professor-card.component';
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { ScoreImagePipe } from './pipes/score-image.pipe';



@NgModule({
  declarations: [
    LayoutPageComponent,
    ListStudentsPageComponent,
    StudentPageComponent,
    NewStudentPageComponent,
    SearchStudentPageComponent,
    ListProfessorsPageComponent,
    ProfessorPageComponent,
    NewProfessorPageComponent,
    SearchProffesorPageComponent,
    ListScoresPageComponent,
    ScorePageComponent,
    NewScorePageComponent,
    SearchScorePageComponent,
    StudentCardComponent,
    StudentImagePipe,
    ConfirmDialogComponent,
    ProfessorImagePipe,
    ProfessorCardComponent,
    ScoreCardComponent,
    ScoreImagePipe
  ],
  imports: [
    CommonModule,
    InstituteRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InstituteModule { }
