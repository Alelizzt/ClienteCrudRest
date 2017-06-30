import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'empleados-list',
  templateUrl: '../views/empleados-list.html',
  providers: [EmpleadoService]
})

export class EmpleadosListComponent{
  public titulo:string;
  public empleados: Empleado[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _empleadoService: EmpleadoService
  ){
    this.titulo = 'Listado de empleados';
  }

  ngOnInit(){
    console.log("EmpleadosListComponent cargado");

    this._empleadoService.getEmpleados().subscribe(
      result => {
          this.empleados = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
