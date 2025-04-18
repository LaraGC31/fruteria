import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }
  setAniadirPedidos(
    idUsuario: any,
    totalPrecio: any
    
  ): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}Pedidos/aniadirPedido?idUsuario=${idUsuario}&totalPrecio=${totalPrecio}`
    );
  }
  setAniadirDetallePedido(
    idProducto: any,
    precio: any,
    cantidad: any
    
  ): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}Pedidos/aniadirDetallePedido?idProducto=${idProducto}&precio=${precio}&cantidad=${cantidad}`
    );
  }
 
  
}
