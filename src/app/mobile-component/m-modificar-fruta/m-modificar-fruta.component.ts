import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { DataSignalService } from '../../services/data-signal/data-signal.service';
import {ProductosService} from '../../services/productos/productos.service';
import { Router } from '@angular/router'; 
import {CarritoService} from '../../services/carrito/carrito.service';
@Component({
  selector: 'app-m-modificar-fruta',
  imports: [FormsModule],
  templateUrl: './m-modificar-fruta.component.html',
  styleUrl: './m-modificar-fruta.component.css'
})
export class MModificarFrutaComponent implements OnInit {
 ngOnInit(){
  }
}
