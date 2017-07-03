import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/empleado';
import { GLOBAL} from '../services/global';

@Component({
	selector: 'empleado-edit',
	templateUrl: '../views/empleado-add.html',
	providers: [EmpleadoService]
})
export class EmpleadoEditComponent{
	public titulo: string;
	public empleado: Empleado;
	public filesToUpload;
  	public resultUpload;
  	public is_edit;


	constructor(
		private _empleadoService: EmpleadoService,
		private _route: ActivatedRoute,
		private _router: Router
		){
		this.titulo = 'Editar producto';
		this.empleado = new Empleado('','',0);
		this.is_edit = true;
	}

	ngOnInit(){
		console.log(this.titulo);
		this.getEmpleado();
	}
	onSubmit(){
    console.log(this.empleado);
		  /*  Metodo para agregar imagen
		  if(this.filesToUpload && this.filesToUpload.lenght >=1){
		    this._empleadoService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then((result)=>{
		      console.log(result);
		      this.resultUpload = result;
		      this.empleado.imagen = this.resultUpload.filename;
		      //se agrega el metodo para agregar todos los datos del empleado (si se incluye la imagen en el backend)
		    },(error)=>{
		      console.log(error);
		     });
		   }else{
		     this.updateEmpleado();
		   }
		    updateEmpleado(){
		      this._empleadoService.addEmpleado ... bla bla bla (copiar lo de abajo xD)
		    }
		   */
		this._route.params.forEach((params: Params)=>{
			let id = params['id'];
			this._empleadoService.editEmpleado(id, this.empleado).subscribe(
		      response => {
		        
		          this._router.navigate(['/empleado', id]);
		          //console.log(response);
		        
		      },
		      error => {
		          console.log('ERROR '+<any>error);
		      }
	      );
		});   
			   
	    
  	}

/*Metodo para subir archivos de imagen*/

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

	getEmpleado(){
		this._route.params.forEach((params: Params)=>{
			let id = params['id'];
			this._empleadoService.getEmpleado(id).subscribe(
					response =>{
						this.empleado = response;
					},
					error => {
						console.log(<any>error);
					}
				);
		});
	}

}