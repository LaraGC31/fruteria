import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { DataSignalService } from '../services/data-signal/data-signal.service';
import {ProductosService} from '../services/productos/productos.service';
import { Router } from '@angular/router'; 
import {CarritoService} from '../services/carrito/carrito.service';

@Component({
  selector: 'app-modificar-verdura',
  imports: [FormsModule],
  templateUrl: './modificar-verdura.component.html',
  styleUrl: './modificar-verdura.component.css'
})
export class ModificarVerduraComponent  implements OnInit{
  tipo:any = '';
data:any;
data2:any = {};
    constructor(private http: HttpClient, private dataService: DataSignalService, 
    private router: Router, private productosService: ProductosService, private CarritoService: CarritoService

  ){}
    ngOnInit(){
    this.getNombreProductosVerdura();

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
  getNombreProductosVerdura(){
      this.productosService.getNombreProductosVerdura().subscribe((data)=>{
      this.data = data;
    })
  }
   getObtenerProductosByNombre(){
  if(this.tipo){
      this.productosService.getObtenerProductosByNombre(this.tipo).subscribe((data2)=>{
        if(Array.isArray(data2) && data2.length > 0){
          this.data2 = data2[0];
        }else{
      this.data2 = data2;
        }
    })
  }
}
   onSubmit() :void{
   this.productosService.getModificarProductos(this.data2.id, this.data2.nombre, this.data2.descripcion, this.data2.precio).subscribe((data)=>{
      window.location.reload();
   })
  }
}
