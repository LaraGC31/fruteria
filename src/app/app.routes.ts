import { RouterModule, Routes } from '@angular/router';
import {VerduraComponent} from './verdura/verdura.component';
import {FrutaComponent} from './fruta/fruta.component';
import {InicioComponent} from './inicio/inicio.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {CarritoComponent} from './carrito/carrito.component';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {VerPedidosComponent} from './ver-pedidos/ver-pedidos.component';
export const routes: Routes = [

{path:"verdura", component:VerduraComponent},    
{path:"fruta", component:FrutaComponent},   
{path:"inicio", component:InicioComponent},    
{path:"", component:InicioComponent},    
{path:"perfil-usuario", component:UsuarioComponent},
{path:"carrito", component:CarritoComponent},   
{path:"login", component:LoginComponent},   
{path:"registro", component:RegistroComponent},   
{path:"ver-pedidos", component:VerPedidosComponent}   

];
