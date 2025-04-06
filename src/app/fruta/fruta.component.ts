import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { DataSignalService } from '../services/data-signal/data-signal.service';
import {ProductosService} from '../services/productos/productos.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-fruta',
  imports: [FormsModule],
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.css'
})
export class FrutaComponent  implements OnInit{
data:any = '';
  constructor(private http: HttpClient, private dataService: DataSignalService, 
    private router: Router, private productosService: ProductosService

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
  aniadirFV(){
    this.router.navigate(['/aniadirFV']); 
  }
  getProductosByFrutas(){
    this.productosService.getProductosByFruta().subscribe((data)=>{
      this.data = data
    })
  }
 
}
