import { Component } from '@angular/core';
import { DataSignalService } from '../services/data-signal/data-signal.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent  {


  constructor(private router: Router,
    private dataService: DataSignalService
  ){

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
  
}
