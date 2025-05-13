import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { DataSignalService } from '../services/data-signal/data-signal.service';
import {CategoriaService} from '../services/categorias/categoria.service';

@Component({
  selector: 'app-formulario-frutas-verduras',
  imports: [FormsModule],
  templateUrl: './formulario-frutas-verduras.component.html',
  styleUrl: './formulario-frutas-verduras.component.css'
})
export class FormularioFrutasVerdurasComponent implements OnInit{
nombre:string = '';
stock:any = '1';
idCategoria:any = '';
descripcion:string = '';
precio:any = '';
foto:string = '';
selectedFile: File | null = null;
botonAniadir: boolean = false;
dataRegistros : any = '';
data:any= '';
  constructor(private http: HttpClient, private dataService: DataSignalService, private categoriaService: CategoriaService){}

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  ngOnInit(){
   this.obtenerTodasCategorias();
  }
  onSubmit(): void{
    this.botonAniadir = true;
    if (
      this.nombre === '' ||
      typeof this.nombre == 'undefined' ||
      this.idCategoria === '' ||
      typeof this.idCategoria == 'undefined' ||
    this.stock === '' ||
    typeof this.stock == 'undefined' ||
    this.foto === '' ||
      typeof this.foto == 'undefined' ||
      this.descripcion === '' ||
      typeof this.descripcion == 'undefined' ||
      this.precio === '' ||
      typeof this.precio == 'undefined') {
    }else{
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
       this.foto = '';
       this.stock = '';
       this.descripcion = '';
       this.precio = '';
       this.botonAniadir = false;
      });
    }
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
  obtenerTodasCategorias(){
    this.categoriaService.obtenerCategorias().subscribe((data)=>{
      
      this.data = data;
    })
  }
}