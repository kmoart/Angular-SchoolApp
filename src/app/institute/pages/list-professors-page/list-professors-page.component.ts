import { Component, OnInit } from '@angular/core';
import { Professor } from '../../interfaces/professor.interface';
import { ProfessorsService } from '../../services/professors.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-professors-page',
  templateUrl: './list-professors-page.component.html',
  styleUrl: './list-professors-page.component.css'
})
export class ListProfessorsPageComponent implements OnInit{

  public professors: Professor[] = [];

  //Profesores que se muestran actualmente
  public paginatedProfessors: Professor[] = [];

  //Configuración de paginación
  public pageSize = 3;
  public pageIndex = 0;

  constructor(private professorService: ProfessorsService){}

  ngOnInit(): void {
      this.professorService.getProfessors()
        .subscribe({
          next: (response:Professor[]) =>{
            this.professors = response;

            this.updatePaginatedProfessors();
          },
          error:(err) =>{
            console.error( err );
          }
        });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.updatePaginatedProfessors();
  }

  private updatePaginatedProfessors(): void{

    const startIndex = this.pageIndex * this.pageSize;

    const endIndex = startIndex + this.pageSize;

    this.paginatedProfessors =
          this.professors.slice(startIndex,endIndex);
  }

}
