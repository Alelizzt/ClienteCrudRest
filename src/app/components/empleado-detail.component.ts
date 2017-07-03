import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'empleado-detail',
  templateUrl: '../views/empleado-detail.html',
  providers: [EmpleadoService]
})

export class EmpleadoDetailComponent{
	public empleado: Empleado;

	constructor(
	    private _router: Router,
	    private _route: ActivatedRoute,
	    private _empleadoService: EmpleadoService
		){
	}

	ngOnInit(){
		console.log('Producto-detail.Componet cargado...');
		this.getEmpleado();
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
