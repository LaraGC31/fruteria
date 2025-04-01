import { Component, HostListener, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink} from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router'; 
import { DataSignalService } from './services/data-signal/data-signal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
cerrarSesion() {
throw new Error('Method not implemented.');
}
  title = 'fruteria';
  constructor(private dataService: DataSignalService,
    private router: Router,
    private location: Location){

  }
  usuario: any = {id: null, nombre: "", email: "", rol: ""};

  login(){
    this.router.navigate(['/login']); 
  }
  registro(){
    this.router.navigate(['/registro']);
  }
  let id = localStorage.getItem("id");
    let nombre = localStorage.getItem("nombre");
    let email = localStorage.getItem("email");
    let rol = localStorage.getItem("rol");
    

    if (email != 'undefined' && email != null 
      && nombre != 'undefined' && nombre != null
      && id != 'undefined' && id != null
      && rol != 'undefined' && rol != null
    ) {
      this.usuario.id = id;
      this.usuario.nombre = nombre;
      this.usuario.email = email;
      this.usuario.rol = rol;
      this.sendUsuario();
  }
  recibirUsuario(usuario: any) {
    this.usuario = usuario;
    localStorage.setItem("id", usuario.id);
    localStorage.setItem("nombre", usuario.nombre);
    localStorage.setItem("email", usuario.email);
    localStorage.setItem("rol", usuario.rol);
    
    this.sendUsuario();
  }

  sendUsuario() {
    this.dataService.setId(this.usuario.id);
    this.dataService.setNombre(this.usuario.nombre);
  }
  cerrarSesion() {
    localStorage.clear();

    this.router.navigate(['/']);

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
