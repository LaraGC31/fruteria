import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSignalService {

  private email = signal(localStorage.getItem('email') || ''); 
  private nombre = signal(localStorage.getItem('nombreApellidos') || ''); 
  private rol = signal(localStorage.getItem('rol') || ''); 
  private avatar = signal(localStorage.getItem('avatar') || ''); 

  private id = signal<number | null>(localStorage.getItem('id') ? parseInt(localStorage.getItem('id')!) : null);  

  private incidenciaId = signal('');

  setId(id: number | null): void {
    this.id.set(id);
    localStorage.setItem('id', id?.toString() || ''); 
  }

  
  getId(): number | null {
    return this.id();  
  }

  
  setEmail(email: string): void {
    this.email.set(email);
    localStorage.setItem('email', email);  
  }

  
  getEmail(): string {
    return this.email();  
  }

  setNombre(nombre: string): void {
    this.nombre.set(nombre);
    localStorage.setItem('nombreApellidos', nombre);  
  }

  
  getNombre(): string {
    return this.nombre();  
  }
  
  setRol(rol: string): void {
    this.rol.set(rol);
    localStorage.setItem('rol', rol);  
  }

  getRol(): string {
    return this.rol();  
  } 
  getAvatar(): string {
    return this.avatar();  
  }
  
   setAvatar(avatar: string): void {
    this.avatar.set(avatar);
    localStorage.setItem('avatar', avatar);  
  }

  
  
  
  setIncidenciaId(id: string): void {
    this.incidenciaId.set(id);
  }

  
  getIncidenciaId(): string {
    return this.incidenciaId();  
  }
}
