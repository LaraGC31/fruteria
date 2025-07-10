import { Component } from '@angular/core';
import {UsuarioService} from '../services/usuarios/usuario.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  telefono: string = '';
 avatar:string='';
 direccion: string = '';
 codPostal: string = '';
 provincia:string = '';
 dataRegistro: any = '';
botonAniadir:boolean = false;
avatarList = [
  '../../assets/avatar1.avif',
  '../../assets/avatar2.jpg',
  '../../assets/avatar3.jpg',
  '../../assets/avatar4.webp',
  '../../assets/avatar5.webp',
  '../../assets/avatar6.jpg'
];
avatarSeleccionado:any = '';
  constructor(private usuarioService: UsuarioService) {}

  onSubmit(): void {
    this.botonAniadir = true;
    if((this.nombre === '' || typeof this.nombre == 'undefined') || 
    (this.email === '' || typeof this.email == 'undefined')|| (this.password === '' || typeof this.password == 'undefined') || (this.telefono === '' || typeof this.telefono == 'undefined') || (this.direccion === '' || typeof this.direccion == 'undefined') || (this.provincia === '' || typeof this.provincia == 'undefined') || (this.codPostal === '' || typeof this.codPostal == 'undefined') ||  (this.avatarSeleccionado === '' || typeof this.avatarSeleccionado == 'undefined')  ){
    }else{
    this.usuarioService
      .registrarUsuario(
        this.nombre,
        this.email,
        this.password,
        this.provincia,
        this.direccion,
        this.codPostal,
        this.telefono,
        this.avatarSeleccionado
      )
      .subscribe((dataRegistro) => {
        this.dataRegistro = dataRegistro;     
        if(dataRegistro.status == true){  
        this.nombre = '';
        this.email = '';
        this.password = '';
        this.provincia = '';
        this.direccion = '';
        this.codPostal = '';
        this.telefono = '';
        this.avatarSeleccionado = '';
        this.botonAniadir = false;
        }
      });
  }
}
}
