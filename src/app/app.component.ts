import { Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'; 
import { DataSignalService } from './services/data-signal/data-signal.service';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'fruteria';
  usuario: any = {id: null, nombre: "", email: "", rol: ""};

  
  mostrarSidebar: boolean = true;
  mostrarSidebarD: boolean = true;
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor(private dataService: DataSignalService,
    private router: Router,
    private location: Location){}

  ngOnInit(){
    this.mostrarSidebar = true;
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.location.subscribe((data) => {
      this.router.navigateByUrl('/');
      this.mostrarSidebar = true;
    });
 this.cargarUsuario();
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
  cargarUsuario() :void{
    let id = localStorage.getItem("id");
    let nombre = localStorage.getItem("nombreApellidos");
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
  }
  recibirUsuario(usuario: any): void {
    this.usuario = usuario;
    localStorage.setItem("id", usuario.id);
    localStorage.setItem("nombreApellidos", usuario.nombre);
    localStorage.setItem("email", usuario.email);
    localStorage.setItem("rol", usuario.rol);
    
    this.sendUsuario();
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  ocultarMostrarSidebar() {
    this.mostrarSidebarD = !this.mostrarSidebarD;
  }

  ocultarSidebar() {
    this.mostrarSidebar = false;
  }


  volver() {
    this.mostrarSidebar = true;
  }
  sendUsuario(): void {
    this.dataService.setId(this.usuario.id);
    this.dataService.setEmail(this.usuario.email);
    this.dataService.setRol(this.usuario.rol);
    this.dataService.setNombre(this.usuario.nombre);
  }
  registro() {
    this.router.navigate(['/registro']);
  
  }
  login() {
    this.router.navigate(['/login']); 
  
  }
  cerrarSesion():void {
    localStorage.clear();

    this.router.navigate(['/']);

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
