import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'students-student-card',
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent implements OnInit{

  @Input()
  public student!: Student;

  ngOnInit(): void {
      if( !this.student ) throw Error('Student property is required!');
  }

}
