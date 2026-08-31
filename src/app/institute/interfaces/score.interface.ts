export interface Score {
  id: number;
  nombre: string;
  idProfesor: number;
  idEstudiante: number;
  valor: number;
  profesor?: string;
  estudiante?: string;
}
