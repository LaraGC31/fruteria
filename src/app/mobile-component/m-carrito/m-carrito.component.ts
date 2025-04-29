import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { DataSignalService } from '../../services/data-signal/data-signal.service';
import {CarritoService} from '../../services/carrito/carrito.service';
import {PedidosService} from '../../services/pedidos/pedidos.service';

@Component({
  selector: 'app-m-carrito',
  standalone: true,
  imports: [FormsModule],
templateUrl: './m-carrito.component.html',
  styleUrl: './m-carrito.component.css'
})
export class  MCarritoComponent implements OnInit {

  data: any[] = [];
  datos:any;
  constructor(private http: HttpClient, private dataService: DataSignalService, private CarritoService: CarritoService, private PedidosService:PedidosService
  ){}

  ngOnInit(){
    this.getProductosCarritoByUsuario();
  }
  

  get usuarioEmail(): string{
    return this.dataService.getEmail();
  }
  get usuarioId():number|null {
    return this.dataService.getId();
  }
  get usuarioNombre(): string{
    return this.dataService.getNombre();
  }
  get usuarioRol():string {
    return this.dataService.getRol();
  }
  getProductosCarritoByUsuario(){
  this.CarritoService.getProductosCarritoByUsuario(this.usuarioId).subscribe((data:any[])=>{
   this.data = data.map(data=>({
    ...data,
    cantidad: 1
   }));
  });
  }
  eliminarProducto(id: any){
    this.CarritoService.getBorrarProductosCarrito(id).subscribe(data=>{
      this.getProductosCarritoByUsuario();

    })
  }
  tramitarPedido(subtotal:any, idUsuario:any){
    const formData = new FormData();
    formData.append('idUsuario', idUsuario);

    this.PedidosService.getOnePedidos(idUsuario).subscribe((datos) => {
     this.datos = datos;
     console.log(datos);
     
   
     let totalFinal = subtotal;
 
     if ((datos != 0) && totalFinal < 20) {
       alert("Tienes que pagar 2€ por los gastos de envio, el pedido no llega a 20€");
       totalFinal += 2;
     }
 
     formData.append('totalPrecio', totalFinal);
 


 this.http
   .post<any>(
     `${environment.baseUrl}Pedidos/aniadirPedido`,
     formData
   )
   .subscribe((data) => {
     const idPedido = data.idPedido;
for(let producto of this.data){
 const formData = new FormData();
 
 formData.append('idPedido',idPedido);
 formData.append('idProducto', producto.id);
 formData.append('cantidad', producto.cantidad);
 formData.append('precio', producto.precio);

 
  
 
 this.http
   .post<any>(
     `${environment.baseUrl}Pedidos/aniadirDetallePedido`,
     formData
   )
   .subscribe((data)=>{});

}
this.CarritoService.getBorrarProductosCarritoTodos(this.usuarioId).subscribe((data)=>{
this.getProductosCarritoByUsuario();
alert("Pedido tramitado con exito");
});
});
    });
}

 
  sumar(item: any) {
    item.cantidad = (item.cantidad || 1) + 1;
  }
  
  restar(item: any) {
    if (!item.cantidad || item.cantidad <= 1) {
      item.cantidad = 1;
    } else {
      item.cantidad -= 1;
    }
  }
get  subtotal(): number{
  return this.data.reduce((total, item)=>{
   const cantidad = item.cantidad || 1;
   const precio = item.precio || 0;
   const total2 = total + (cantidad * precio);
   return Math.round(total2 * 100)/100;
  },0);
  }

}
