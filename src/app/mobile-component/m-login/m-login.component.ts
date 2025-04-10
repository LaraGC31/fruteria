import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UsuarioService} from '../../services/usuarios/usuario.service';
import { Router } from '@angular/router'; 
import { DataSignalService } from '../../services/data-signal/data-signal.service';

@Component({
  selector: 'app-m-login',
  imports: [FormsModule],
  templateUrl: './m-login.component.html',
  styleUrl: './m-login.component.css'
})
export class MLoginComponent implements OnInit {
  id:any
  email:string = '';
  password:string = '';
  nombre:string ='';
  rol:string ='';
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
      this.enviarUsuario.emit(data);
      this.id = data.id;
      this.nombre = data.nombre;
      this.rol = data.rol;
      this.guardarUsuario(data);
  
    });
  }
  
  guardarUsuario(usuario: any) {
    if (this.email && this.password) {
      localStorage.setItem('id', usuario.id);
      localStorage.setItem('email', usuario.email);
      localStorage.setItem('nombreApellidos', usuario.nombre);
      localStorage.setItem('rol', usuario.rol);
      localStorage.setItem('password', usuario.password);
    }
    this.dataSignalService.setId(this.id);
    this.dataSignalService.setEmail(this.email);
    this.dataSignalService.setNombre(this.nombre);
    this.dataSignalService.setRol(this.rol);
    this.router.navigate(['/inicio']); 
  
  }
  }
  
