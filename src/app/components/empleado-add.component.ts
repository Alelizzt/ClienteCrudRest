import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'empleado-add',
  templateUrl: '../views/empleado-add.html',
  providers: [EmpleadoService]
})
export class EmpleadoAddComponent{
  public titulo: string;
  public empleado: Empleado;

  constructor(
      private _empleadoService: EmpleadoService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
    this.titulo = 'Añade un nuevo empleado';
    this.empleado = new Empleado('','',0);
  }

  ngOnInit(){
    console.log('EmpleadoAddComponent cargado');
  }

  onSubmit(){
    console.log(this.empleado);

    this._empleadoService.addEmpleado(this.empleado).subscribe(
      response => {
        
          this._router.navigate(['/home']);
          //console.log(response);
        
      },
      error => {
          console.log('ERROR '+<any>error);
      }
      );
  }
}
