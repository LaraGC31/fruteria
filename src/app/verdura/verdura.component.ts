import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { DataSignalService } from '../services/data-signal/data-signal.service';
import {ProductosService} from '../services/productos/productos.service';
import { Router } from '@angular/router'; 
import {CarritoService} from '../services/carrito/carrito.service';


@Component({
  selector: 'app-verdura',
  imports: [FormsModule],
  templateUrl: './verdura.component.html',
  styleUrl: './verdura.component.css'
})
export class VerduraComponent  implements OnInit {

  data: any = '';
  constructor(private http: HttpClient, private dataService: DataSignalService, 
    private router: Router, private productosService: ProductosService, private CarritoService: CarritoService

  ){}
  ngOnInit(){
    this.getProductosByVerdura();
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
  getProductosByVerdura(){
    this.productosService.getProductosByVerdura().subscribe((data)=>{
      this.data = data
    })
  }
  aniadirFV(){
    this.router.navigate(['/aniadirFV']); 
  }
  aniadirCarrito(idUsuario:any,idProducto:any,precio:any){
    this.CarritoService.getProductosCarritoByUsuario(this.usuarioId).subscribe((productosEnCarrito: any[]) => {
      const yaExiste = productosEnCarrito.some(p => p.id === idProducto);
      
      if (yaExiste) {
        alert('Este producto ya está en el carrito');
        return;
      }
 
    const formData = new FormData();

    formData.append('idUsuario', idUsuario);
    formData.append('idProducto',idProducto);
    formData.append('precio', precio);
    

    this.http
      .post(
        `${environment.baseUrl}Carrito/aniadirCarrito`,
        formData
      )
      .subscribe((data) => {
        alert("Pedido añadido al carrito");

  });
});
  }
  borrarProductos(id:any){
    this.productosService.getBorrarProductoEnOtroSitio(id).subscribe((data:any)=>{
      if(data.puedeEliminar){
        this.productosService.borrarProductos(id).subscribe(data=>{
      
          window.location.reload();
    
        })
      }else{
        alert("No se puede");
      }
    })
   
  }
  verBloqueadosVerdura(){
     this.router.navigate(['/verBloqueadosverdura']); 
  }
}
