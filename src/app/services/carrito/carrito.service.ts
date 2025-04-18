import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { }
  setAniadirCarrito(
    idUsuario: any,
    idProducto: any,
    precio: any
    
  ): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}Carrito/aniadirCarrito?idUsuario=${idUsuario}&idProducto=${idProducto}&precio=${precio}`
    );
  }

  getProductosCarritoByUsuario(idUsuario: any): Observable<any>{
    return this.http.get(
      `${environment.baseUrl}Carrito/getProductosCarritoByUsuario?idUsuario=${idUsuario}`
    );
  }
  getBorrarProductosCarrito(idProducto: any):  Observable<any>{
    return this.http.get(
      `${environment.baseUrl}Carrito/getBorrarProductosCarrito?idProducto=${idProducto}`
    );
  }
  getBorrarProductosCarritoTodos(idUsuario: any):  Observable<any>{
    return this.http.get(
      `${environment.baseUrl}Carrito/getBorrarProductosCarritoTodos?idUsuario=${idUsuario}`
    );
  }
}
