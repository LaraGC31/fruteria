import { RouterModule, Routes } from '@angular/router';
import {VerduraComponent} from './verdura/verdura.component';
import {FrutaComponent} from './fruta/fruta.component';
import {InicioComponent} from './inicio/inicio.component';
import {CarritoComponent} from './carrito/carrito.component';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {VerPedidosComponent} from './ver-pedidos/ver-pedidos.component';
import {DatosUsuariosComponent} from './datos-usuarios/datos-usuarios.component';
import {FormularioFrutasVerdurasComponent} from './formulario-frutas-verduras/formulario-frutas-verduras.component';
import { MFormularioFrutasVerdurasComponent } from './mobile-component/m-formulario-frutas-verduras/m-formulario-frutas-verduras.component';
import { MFrutaComponent } from './mobile-component/m-fruta/m-fruta.component';
import { MInicioComponent } from './mobile-component/m-inicio/m-inicio.component';
import { MCarritoComponent } from './mobile-component/m-carrito/m-carrito.component';
import { MLoginComponent } from './mobile-component/m-login/m-login.component';
import { MRegistroComponent } from './mobile-component/m-registro/m-registro.component';
import { MVerPedidosComponent } from './mobile-component/m-ver-pedidos/m-ver-pedidos.component';
import { MDatosUsuariosComponent } from "./mobile-component/m-datos-usuarios/m-datos-usuarios.component";
import { MVerduraComponent } from './mobile-component/m-verdura/m-verdura.component';
import { VerBloqueadosFrutaComponent } from './ver-bloqueados-fruta/ver-bloqueados-fruta.component';
import { VerBloqueadosVerduraComponent } from './ver-bloqueados-verdura/ver-bloqueados-verdura.component';

export const routes: Routes = [

{path:"verdura", component:VerduraComponent},    
{path:"fruta", component:FrutaComponent},   
{path:"inicio", component:InicioComponent},    
{path:"", component:InicioComponent},    
{path:"carrito", component:CarritoComponent},   
{path:"login", component:LoginComponent},   
{path:"registro", component:RegistroComponent},   
{path:"ver-pedidos", component:VerPedidosComponent},   
{path:"aniadirFV", component: FormularioFrutasVerdurasComponent},   
{path:"datos-usuarios", component: DatosUsuariosComponent},   
{path:"m-verdura", component:MVerduraComponent},    
{path:"m-fruta", component:MFrutaComponent},   
{path:"m-inicio", component:MInicioComponent},    
{path:"m-carrito", component:MCarritoComponent},   
{path:"m-login", component:MLoginComponent},   
{path:"m-registro", component:MRegistroComponent},   
{path:"m-ver-pedidos", component:MVerPedidosComponent},   
{path:"m-aniadirFV", component: MFormularioFrutasVerdurasComponent},  
{path:"m-datos-usuarios", component: MDatosUsuariosComponent},  
{path:"verBloqueadosfruta", component: VerBloqueadosFrutaComponent},  
{path:"verBloqueadosverdura", component: VerBloqueadosVerduraComponent}  

];