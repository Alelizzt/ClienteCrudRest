 import { Injectable } from '@angular/core';
 import { Http, Response, Headers, RequestOptions } from '@angular/http';
 import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Observable';
 import { Empleado } from '../models/empleado';
 import { GLOBAL } from './global';

 @Injectable()
 export class EmpleadoService{
   public url:string;

   constructor(
     public _http: Http
   ){
     this.url = GLOBAL.url;
   }

   getEmpleados(){
     return this._http.get(this.url+'empleados').map(res => res.json());
   }
 }
