import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'http://localhost/proyecto/back-end/';

  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}Usuario/login?email=${email}&password=${password}`
    );
  }

  registrarUsuario(
    nombre: string,
    email: string,
    password: string,
    provincia: string,
    direccion:string,
    codPostal:string,
    telefono:string,

  ): Observable<any> {
    return this.http.get(
      `${this.baseUrl}Usuario/aniadirUsuario?nombre=${nombre}&email=${email}&password=${password}&provincia=${provincia}&direccion=${direccion}&codPostal=${codPostal}&telefono=${telefono}`
    );
  }
}
