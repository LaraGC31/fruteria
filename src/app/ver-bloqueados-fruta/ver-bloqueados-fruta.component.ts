import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { DataSignalService } from '../services/data-signal/data-signal.service';
import {ProductosService} from '../services/productos/productos.service';
import { Router } from '@angular/router'; 
import {CarritoService} from '../services/carrito/carrito.service';
@Component({
  selector: 'app-ver-bloqueados-fruta',
  imports: [FormsModule],
  templateUrl: './ver-bloqueados-fruta.component.html',
  styleUrl: './ver-bloqueados-fruta.component.css'
})
export class VerBloqueadosFrutaComponent {
data: any = '';
  constructor(private http: HttpClient, private dataService: DataSignalService, 
    private router: Router, private productosService: ProductosService, private CarritoService: CarritoService

  ){}
  ngOnInit(){
    this.getProductosByFrutas();
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
 getProductosByFrutas(){
    this.productosService.getProductosByFrutaBloqueados().subscribe((data)=>{
      this.data = data
    })
  }

desbloquearProductoFruta(id:any){
 this.productosService.getDesbloquear(id).subscribe((data)=>{
   window.location.reload();
})
}
}
