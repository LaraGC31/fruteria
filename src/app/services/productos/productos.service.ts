import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }


  setIncidenciaCorrectiva(
    nombre: string,
    idCategoria: any,
    stock: string,
    foto: string,
    descripcion: string,
    precio: string,
    
  ): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}Productos/aniadirProductos?nombre=${nombre}&idCategoria=${idCategoria}&stock=${stock}&foto=${foto}&descripcion=${descripcion}&precio=${precio}`
    );
  }
  getProductosByFruta(){
    return this.http.get(`${environment.baseUrl}Productos/getProductosByFruta`);
  }
  getProductosByVerdura(){
    return this.http.get(`${environment.baseUrl}Productos/getProductosByVerdura`);
  }
}
