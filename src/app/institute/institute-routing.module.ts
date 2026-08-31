import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { NewStudentPageComponent } from "./pages/new-student-page/new-student-page.component";
import { NewScorePageComponent } from "./pages/new-score-page/new-score-page.component";
import { SearchStudentPageComponent } from "./pages/search-student-page/search-student-page.component";
import { SearchProffesorPageComponent } from "./pages/search-proffesor-page/search-proffesor-page.component";
import { SearchScorePageComponent } from "./pages/search-score-page/search-score-page.component";
import { NewProfessorPageComponent } from "./pages/new-professor-page/new-professor-page.component";
import { ListStudentsPageComponent } from "./pages/list-students-page/list-students-page.component";
import { ListProfessorsPageComponent } from "./pages/list-professors-page/list-professors-page.component";
import { ListScoresPageComponent } from "./pages/list-scores-page/list-scores-page.component";
import { StudentPageComponent } from "./pages/student-page/student-page.component";
import { ProfessorPageComponent } from "./pages/professor-page/professor-page.component";
import { ScorePageComponent } from "./pages/score-page/score-page.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {
        path:'new-student', component: NewStudentPageComponent
      },
      {
        path:'new-professor', component: NewProfessorPageComponent
      },
      {
        path:'new-score', component: NewScorePageComponent
      },
      {
        path:'searchStudent', component: SearchStudentPageComponent
      },
      {
        path:'searchProfessor', component: SearchProffesorPageComponent
      },
      {
        path:'searchScore', component: SearchScorePageComponent
      },
      {
        path: 'editStudent/:id', component: NewStudentPageComponent
      },
      {
        path: 'editProfessor/:id', component: NewProfessorPageComponent
      },
      {
        path: 'editScore/:id', component: NewScorePageComponent
      },
      {
        path: 'listStudents', component: ListStudentsPageComponent
      },
      {
        path: 'listProfessors', component: ListProfessorsPageComponent
      },
      {
        path: 'listScores', component: ListScoresPageComponent
      },
      {
        path: 'detailStudent/:id', component: StudentPageComponent
      },
      {
        path: 'detailProfessor/:id', component: ProfessorPageComponent
      },
      {
        path: 'detailScore/:id', component: ScorePageComponent
      },
      {
        path: '**', redirectTo: 'listStudents'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteRoutingModule { }
