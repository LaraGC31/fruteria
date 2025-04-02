import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSignalService {

  private email = signal(localStorage.getItem('email') || '');  // Cargar el email desde localStorage
  private id = signal<number | null>(localStorage.getItem('id') ? parseInt(localStorage.getItem('id')!) : null);  // Cargar el ID desde localStorage

  private incidenciaId = signal('');

  // Establecer el 'id'
  setId(id: number | null): void {
    this.id.set(id);
    localStorage.setItem('id', id?.toString() || '');  // Guardar el ID en localStorage
  }

  // Obtener el 'id'
  getId(): number | null {
    return this.id();  // Accede al valor de la señal
  }

  // Establecer el 'email'
  setEmail(email: string): void {
    this.email.set(email);
    localStorage.setItem('email', email);  // Guardar el email en localStorage
  }

  // Obtener el 'email'
  getEmail(): string {
    return this.email();  // Accede al valor de la señal
  }

  // Establecer el 'incidenciaId'
  setIncidenciaId(id: string): void {
    this.incidenciaId.set(id);
  }

  // Obtener el 'incidenciaId'
  getIncidenciaId(): string {
    return this.incidenciaId();  // Accede al valor de la señal
  }
}
