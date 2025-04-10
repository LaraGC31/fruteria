import { Component, OnInit } from '@angular/core';
import { DataSignalService } from '../../services/data-signal/data-signal.service';
import { Router } from '@angular/router'; 
import {ProductosService} from '../../services/productos/productos.service';

@Component({
  selector: 'app-m-inicio',
  imports: [],
  templateUrl: './m-inicio.component.html',
  styleUrl: './m-inicio.component.css'
})
export class MInicioComponent implements OnInit {
  data:any = '';

  constructor(private router: Router,
    private dataService: DataSignalService,
    private productosService: ProductosService
  ){}
  ngOnInit(){
    this.getProductos();
    
  }
  login(){
    this.router.navigate(['/login']); 
  }
  registro(){
    this.router.navigate(['/registro']);
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
  getProductos(){
    this.productosService.getProductos().subscribe((data)=>{
      this.data = data
    })
  }
}
