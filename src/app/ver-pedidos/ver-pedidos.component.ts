import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {PedidosService} from '../services/pedidos/pedidos.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';


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
   nombreApellidos:any,
   email:any,
   provincia:any,
   direccion:any,
   codPostal:any,
   telefono:any,
   nombre:any,
   cantidad:any,
   precio:any
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
    pdf.text(`NOMBRE DEL USUARIO: ${nombreApellidos.toUpperCase()}`, 10, (position += 10));
    pdf.text(`EMAIL: ${email.toUpperCase()}`, 10, (position += 10));
    pdf.text(`PROVINCIA: ${provincia.toUpperCase()}`, 10, (position += 10));
 
    pdf.text(`DIRECCION: ${direccion.toUpperCase()}`, 10, (position += 10));
    pdf.text(`CODIGO POSTAL: ${codPostal.toUpperCase()}`, 10, (position += 10));
    pdf.text(`TELEFONO: ${telefono.toUpperCase()}`, 10, (position += 10));
    pdf.text(`NOMBRE DE LA FRUTA O VERDURA: ${nombre.toUpperCase()}`, 10, (position += 10));
    pdf.text(`CANTIDAD: ${cantidad.toUpperCase()}`, 10, (position += 10));
    pdf.text(`PRECIO: ${precio.toUpperCase()} €`, 10, (position += 10));
    const pdfBlob = pdf.output('blob');

    const pdfUrl = URL.createObjectURL(pdfBlob);

    window.open(pdfUrl, '_blank');

    pdf.save('pedidos.pdf');
  }

}
