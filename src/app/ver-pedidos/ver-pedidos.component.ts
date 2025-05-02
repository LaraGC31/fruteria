import { Component,OnInit } from '@angular/core';
import jspdf from 'jspdf';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {PedidosService} from '../services/pedidos/pedidos.service';
@Component({
  selector: 'app-ver-pedidos',
  imports: [FormsModule, CommonModule],
  templateUrl: './ver-pedidos.component.html',
  styleUrl: './ver-pedidos.component.css'
})
export class VerPedidosComponent implements OnInit{
data:any;
evento:any;
estadoActual:any = '';
estadoNuevo:any;
botonCambioEstado:boolean = false;
cambioEstado:boolean = false;
constructor(private http: HttpClient,
  private PedidosService:PedidosService
){}
ngOnInit(){
this.getObtenerTodosLosPedidos();
}
onSubmit(){
this.PedidosService.cambioEstadoPedidos(this.estadoNuevo, this.evento).subscribe((data)=>{
setTimeout(() => {
  this.cambioEstado = false;
this.getObtenerTodosLosPedidos();
});
});
}
cambiarSelectEstado(evento:any){
  this.botonCambioEstado = false;
}
  getObtenerTodosLosPedidos(){
  this.PedidosService.getObtenerTodosLosPedidos().subscribe((data)=>{
    this.data = data;
    
    this.data.forEach((pedido:any) => {
      let fecha = pedido.fecha.split(" ")[0];
    let [anio, mes, dia] = fecha.split("-");
       pedido.fecha = `${dia}/${mes}/${anio}`;
    });
    
  });
  }
  cambiarEstado(id:any, estado:any){
    this.evento = id;
    this.estadoActual = estado;
   this.cambioEstado = true;
  }
  public generarPdf(
   data:any
  ) {
    const pdf = new jspdf('p', 'mm', 'a4');
    let position = 20;

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(16);
    pdf.text('Pedidos y Datos del Usuario', 80, 10);

    pdf.setLineWidth(0.5);
    pdf.line(10, 15, 200, 15);

    pdf.setFontSize(12);
    position += 25;
    pdf.text(`NOMBRE DEL USUARIO: ${data.nombreApellidos.toUpperCase()}`, 10, (position += 10));
    pdf.text(`EMAIL: ${data.email.toUpperCase()}`, 10, (position += 10));
    pdf.text(`PROVINCIA: ${data.provincia.toUpperCase()}`, 10, (position += 10));
 
    pdf.text(`DIRECCION: ${data.direccion.toUpperCase()}`, 10, (position += 10));
    pdf.text(`CODIGO POSTAL: ${data.codPostal}`, 10, (position += 10));
    pdf.text(`TELEFONO: ${data.telefono}`, 10, (position += 10));
    const productos = this.data.filter((p: any) => p.id === data.id);

    productos.forEach((prod:any) => {
    pdf.text(`NOMBRE DE LA FRUTA O VERDURA: ${prod.nombre.toUpperCase()}`, 10, (position += 10));
    pdf.text(`CANTIDAD: ${prod.cantidad}`, 10, (position += 10));
    pdf.text(`PRECIO: ${prod.precio} €`, 10, (position += 10));
    });
    const pdfBlob = pdf.output('blob');

    const pdfUrl = URL.createObjectURL(pdfBlob);

    window.open(pdfUrl, '_blank');

    pdf.save(`pedidos.pdf`);
  }

}
