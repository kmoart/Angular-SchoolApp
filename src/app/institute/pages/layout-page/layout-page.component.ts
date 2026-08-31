import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

    public sideBarItems = [
    { label:'Listado de Estudiantes',icon:'label',url:'./listStudents' },
    { label:'Añadir Estudiante',icon:'add',url:'./new-student' },
    //{ label:'Buscar Estudiante',icon:'search',url:'./searchStudent' },
    { label:'Listado de Profesores',icon:'label',url:'./listProfessors' },
    { label:'Añadir Profesor',icon:'add',url:'./new-professor' },
    //{ label:'Buscar Profesor',icon:'search',url:'./searchProfessor' },
    { label:'Listado de Notas',icon:'label',url:'./listScores' },
    { label:'Añadir Nota',icon:'add',url:'./new-score' },
    //{ label:'Buscar Nota',icon:'search',url:'./searchScore' },
  ]
}
