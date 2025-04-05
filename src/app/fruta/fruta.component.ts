import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-fruta',
  imports: [FormsModule],
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.css'
})
export class FrutaComponent  implements OnInit{
nombre:string = '';
stock:any = '';
idCategoria:any = '';
descripcion:string = '';
precio:any = '';
foto:string = '';
selectedFile: File | null = null;
dataRegistros : any = '';

  constructor(private http: HttpClient){}

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  ngOnInit(){

  }
  onSubmit(): void{
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('foto', this.selectedFile);
    }

    formData.append('nombre', this.nombre);
    formData.append('idCategoria', this.idCategoria);
    formData.append('stock', this.stock);
    formData.append('descripcion', this.descripcion);
    formData.append('precio', this.precio);
    

    this.http
      .post(
        `${environment.baseUrl}Productos/aniadirProductos`,
        formData
      )
      .subscribe((data) => {
        this.dataRegistros = data;

        this.selectedFile = null;

       this.nombre = '';
       this.idCategoria = '';
       this.stock = '';
       this.descripcion = '';
       this.precio = '';
      });
  }
}
