import { Component } from '@angular/core';
import {UsuarioService} from '../../services/usuarios/usuario.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-m-registro',
  imports: [FormsModule],
  templateUrl: './m-registro.component.html',
  styleUrl: './m-registro.component.css'
})
export class MRegistroComponent {
 nombre: string = '';
  email: string = '';
  password: string = '';
  telefono: string = '';
 
 direccion: string = '';
 codPostal: string = '';
 provincia:string = '';
 dataRegistro: any = '';
botonAniadir:boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  onSubmit(): void {
    this.botonAniadir = true;
    if((this.nombre === '' || typeof this.nombre == 'undefined') || 
    (this.email === '' || typeof this.email == 'undefined')|| (this.password === '' || typeof this.password == 'undefined') || (this.telefono === '' || typeof this.telefono == 'undefined') || (this.direccion === '' || typeof this.direccion == 'undefined') || (this.provincia === '' || typeof this.provincia == 'undefined') || (this.codPostal === '' || typeof this.codPostal == 'undefined') ){
    }else{
    this.usuarioService
      .registrarUsuario(
        this.nombre,
        this.email,
        this.password,
        this.provincia,
        this.direccion,
        this.codPostal,
        this.telefono
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
        this.botonAniadir = false;
        }
      });
  }
}
}
