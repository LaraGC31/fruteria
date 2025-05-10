import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { DataSignalService } from '../../services/data-signal/data-signal.service';
import {ProductosService} from '../../services/productos/productos.service';
import { Router } from '@angular/router'; 
import {CarritoService} from '../../services/carrito/carrito.service';
@Component({
  selector: 'app-m-ver-bloqueados-verdura',
  imports: [FormsModule],
  templateUrl: './m-ver-bloqueados-verdura.component.html',
  styleUrl: './m-ver-bloqueados-verdura.component.css'
})
export class MVerBloqueadosVerduraComponent {
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
    this.productosService.getProductosByVerduraBloqueados().subscribe((data)=>{
      this.data = data
    })
  }
desbloquearProductoVerdura(id:any){
  this.productosService.getDesbloquear(id).subscribe((data)=>{
   window.location.reload();
})
}

}
