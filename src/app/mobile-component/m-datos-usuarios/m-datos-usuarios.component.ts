import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jspdf from 'jspdf';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { DataSignalService } from '../../services/data-signal/data-signal.service';
import {CarritoService} from '../../services/carrito/carrito.service';
import {PedidosService} from '../../services/pedidos/pedidos.service';
import {UsuarioService} from '../../services/usuarios/usuario.service';
import { Router } from '@angular/router'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-m-datos-usuarios',
  imports: [FormsModule, CommonModule],
  templateUrl: './m-datos-usuarios.component.html',
  styleUrl: './m-datos-usuarios.component.css'
})
export class MDatosUsuariosComponent  implements OnInit{
  data:any = '';
  datos:any;
  passwordNueva:any = '';
  avatarList = [
  '../../assets/avatar1.avif',
  '../../assets/avatar2.jpg',
  '../../assets/avatar3.jpg',
  '../../assets/avatar4.webp',
  '../../assets/avatar5.webp',
  '../../assets/avatar6.jpg'
];
avatarSeleccionado:any = '';
  constructor(private usuarioService: UsuarioService, private dataService: DataSignalService,
    private router: Router,
    private location: Location, private PedidosService: PedidosService) {}
  
    ngOnInit(){
      this.datosUsuarios();
      this.getObtenerDelUsuario();
    }
    onSubmit():void{
      if (typeof this.passwordNueva == 'undefined' || this.passwordNueva == null || this.passwordNueva == "") {
        this.passwordNueva = "";
      }
      if (typeof this.avatarSeleccionado == 'undefined' || this.avatarSeleccionado == null || this.avatarSeleccionado == "") {
        this.avatarSeleccionado = "";
      }
      this.usuarioService.modificarUsuarios(this.data.nombreApellidos, this.data.email, this.passwordNueva,this.data.provincia, this.data.direccion, this.data.codPostal, this.data.telefono, this.usuarioId,this.avatarSeleccionado, this.data.avatar  ).subscribe(data => {
     window.location.reload();
      });
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
    get usuarioAvatar():string {
    return this.dataService.getAvatar();
  }
  datosUsuarios(){
    this.usuarioService.datosUsuarios(this.usuarioId).subscribe((data)=>{
      this.data = data;
    })
  }
  getObtenerDelUsuario(){
    this.PedidosService.getObtenerDelUsuario(this.usuarioId).subscribe((datos)=>{
      this.datos = datos;
      
      this.datos.forEach((pedido:any) => {
        let fecha = pedido.fecha.split(" ")[0];
      let [anio, mes, dia] = fecha.split("-");
         pedido.fecha = `${dia}/${mes}/${anio}`;
      });
      
    });
    }
    public generarPdf(
      datos:any
     ) {
       const pdf = new jspdf('p', 'mm', 'a4');
       let position = 20;
   
       pdf.setFont('helvetica', 'bold');
       pdf.setFontSize(16);
       pdf.text('Pedidos y Datos del Usuario', 80, 10);
   
       pdf.setLineWidth(0.5);
       pdf.line(10, 15, 200, 15);
   
       pdf.setFontSize(12);
       pdf.text(`NOMBRE DEL USUARIO: ${datos.nombreApellidos.toUpperCase()}`, 10, (position += 10));
       pdf.text(`EMAIL: ${datos.email.toUpperCase()}`, 10, (position += 10));
       pdf.text(`PROVINCIA: ${datos.provincia.toUpperCase()}`, 10, (position += 10));
    
       pdf.text(`DIRECCION: ${datos.direccion.toUpperCase()}`, 10, (position += 10));
       pdf.text(`CODIGO POSTAL: ${datos.codPostal}`, 10, (position += 10));
       pdf.text(`TELEFONO: ${datos.telefono}`, 10, (position += 10));
    
     
       const nombres = datos.productos.split(',');
       const cantidades = datos.cantidades.split(',');
       const precios = datos.precios.split(',');
     
       for (let i = 0; i < nombres.length; i++) {
         const nombre = nombres[i].trim();
         const cantidad = cantidades[i] ? cantidades[i].trim() : '0';
         const precio = precios[i] ? precios[i].trim() : '0';
     
         pdf.text(`NOMBRE DE LA FRUTA O VERDURA: ${nombre.toUpperCase()}`, 10, (position += 10));
         pdf.text(`CANTIDAD: ${cantidad}`, 10, (position += 10));
         pdf.text(`PRECIO: ${precio} €`, 10, (position += 10));
       }
       pdf.text(`EN CASO DEL PRECIO NO CUADRAR ES QUE FALTAN LOS 2€`, 10, (position += 10));
   
       const pdfBlob = pdf.output('blob');
   
       const pdfUrl = URL.createObjectURL(pdfBlob);
   
       window.open(pdfUrl, '_blank');
   
       pdf.save(`pedidos.pdf`);
     }
   borrarDatos(id:any){
    this.PedidosService.borrarPedido(id).subscribe((data)=>{
      window.location.reload();
  
    })
   }
   }
   
  
