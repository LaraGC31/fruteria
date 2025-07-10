import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UsuarioService} from '../services/usuarios/usuario.service';
import { Router } from '@angular/router'; 
import { DataSignalService } from '../services/data-signal/data-signal.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
id:any
email:string = '';
password:string = '';
nombre:string ='';
rol:string ='';
avatar:string = '';
errores:string = '';
usuario:any = {};
@Output() enviarUsuario = new EventEmitter<any>();
constructor(
  private usuarioService: UsuarioService,   
  private dataSignalService: DataSignalService,
  private router: Router
){}
ngOnInit(): void {
  let id = localStorage.getItem("id");
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password"); 


  if (email != 'undefined' && email != null && password != 'undefined' && password != null) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
onSubmit(): void {
  this.usuarioService.login(this.email, this.password).subscribe((data) => {
    if(data && data.id){
    this.enviarUsuario.emit(data);
    this.id = data.id;
    this.nombre = data.nombre;
    this.rol = data.rol;
    this.avatar = data.avatar;
    this.guardarUsuario(data);
    this.router.navigate(['/inicio']); 
    }else{
    this.errores = "Email o contraseña incorrectos";
    }
  });
}
guardarUsuario(usuario: any) {
  if (this.email && this.password) {
    localStorage.setItem('id', usuario.id);
    localStorage.setItem('email', usuario.email);
    localStorage.setItem('nombreApellidos', usuario.nombre);
    localStorage.setItem('rol', usuario.rol);
    localStorage.setItem('password', usuario.password);
    localStorage.setItem('avatar', usuario.avatar);

  }
  this.dataSignalService.setId(this.id);
  this.dataSignalService.setEmail(this.email);
  this.dataSignalService.setNombre(this.nombre);
  this.dataSignalService.setRol(this.rol);
  this.dataSignalService.setAvatar(this.avatar);
}
}
