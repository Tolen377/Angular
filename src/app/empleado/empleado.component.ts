import { Component } from '@angular/core';

@Component({
  selector: 'empleado-component',
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
})
export class EmpleadoComponent {
  private name = 'Arturo Israel Tolentino Morales';
  private age = 24;
  private badMovies = ['Transformers', 'Fast and forius', 'Deadpool'];
  public hiddenProperty = true;
  public textContent = '';

  public getName(): string {
    return this.name;
  }

  public isAdult(): boolean {
    return this.age >= 18;
  }

  public getFavoriteMovie(value: string) {
    if (!this.badMovies.includes(value)) {
      this.textContent = 'Buena pelicula!';
    } else {
      this.textContent = 'Mala pelicula!';
    }
    this.hiddenProperty = false;
  }
}
