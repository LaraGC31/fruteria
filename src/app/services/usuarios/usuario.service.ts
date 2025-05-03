import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}Usuario/login?email=${email}&password=${password}`
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
      `${environment.baseUrl}Usuario/aniadirUsuario?nombre=${nombre}&email=${email}&password=${password}&provincia=${provincia}&direccion=${direccion}&codPostal=${codPostal}&telefono=${telefono}`
    );
  }
  datosUsuarios(id:any){
    return this.http.get(
      `${environment.baseUrl}Usuario/datosUsuarios?id=${id}`
    );
  }
  modificarUsuarios(
  nombre:string, 
  email:string, 
  password:string,
  provincia:string,
  direccion:string, 
  codPostal:string,
  telefono:string,
  id:any
  ): Observable<any>  {
    return this.http.get(
      `${environment.baseUrl}Usuario/modificarUsuario?nombre=${nombre}&email=${email}&password=${password}&provincia=${provincia}&direccion=${direccion}&codPostal=${codPostal}&telefono=${telefono}&id=${id}`
    );
  }
}
