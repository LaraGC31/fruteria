import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UsuarioService} from '../services/usuarios/usuario.service';

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
usuario:any = {};
 
@Output() enviarUsuario = new EventEmitter<any>();

constructor(
  private usuarioService: UsuarioService,   
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
    this.guardarUsuario();
  });
}

guardarUsuario() {
  if (this.email && this.password) {
    localStorage.setItem('id', this.id);
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
  }
}
}
