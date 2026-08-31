import { Component, Input, OnInit } from '@angular/core';
import { Professor } from '../../interfaces/professor.interface';

@Component({
  selector: 'professors-professor-card',
  templateUrl: './professor-card.component.html',
  styleUrl: './professor-card.component.css'
})
export class ProfessorCardComponent implements OnInit{

  @Input()
  public professor!: Professor;

  ngOnInit(): void {
      if( !this.professor ) throw Error('Professor property is required!');
  }

}
