import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { DataSignalService } from '../services/data-signal/data-signal.service';
import {ProductosService} from '../services/productos/productos.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-verdura',
  imports: [FormsModule],
  templateUrl: './verdura.component.html',
  styleUrl: './verdura.component.css'
})
export class VerduraComponent  implements OnInit {

  data: any = '';
  constructor(private http: HttpClient, private dataService: DataSignalService, 
    private router: Router, private productosService: ProductosService

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
}
