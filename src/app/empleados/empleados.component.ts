import { Component } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'empleados-component',
  templateUrl: 'empleados.component.html',
  styleUrl: 'empleados.component.css',
  standalone: true,
  imports: [EmpleadoComponent],
})
export class EmpleadosComponent {}
