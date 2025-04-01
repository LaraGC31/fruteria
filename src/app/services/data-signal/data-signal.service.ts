import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSignalService {

  private nombre = signal('');
  private id = signal('');

  private incidenciaId = signal('');

  setId(id: any) {
    this.id.set(id);
  }
  getId() {
    return this.id;
  }
  setNombre(nombre: string) {
    this.nombre.set(nombre);
  }
  getNombre() {
    return this.nombre;
  }

  setIncidenciaId(id: any) {
    this.incidenciaId.set(id);
  }

  getIncidenciaId() {
    return this.incidenciaId;
  }
}
