import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'empleados-list',
  templateUrl: '../views/empleados-list.html'
})

export class EmpleadosListComponent{
  public titulo:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Listado de empleados';
  }

  ngOnInit(){
    console.log("EmpleadosListComponent cargado");
  }
}
