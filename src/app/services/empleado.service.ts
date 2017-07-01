 import { Injectable } from '@angular/core';
 import { Http, Response, Headers, RequestOptions } from '@angular/http';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';
 import 'rxjs/add/observable/throw';

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

   getEmpleados(): Observable<Empleado[]>{
     return this._http.get(this.url+'empleados').map((response: Response) => <Empleado[]>response.json())._catch(this.handleError);
   }

   addEmpleado(empleado : Empleado){
   		let json = JSON.stringify(empleado);
      console.log('esto es lo que envio'+json); 
   		//let params = 'json='+json; just in php 
   		let headers = new Headers({'Content-Type':'application/json'}); // in php use: 'application/x-www-form-urlencoded; charset=UTF-8'
      let options = new RequestOptions({ headers: headers });

   		return this._http.post(this.url+'empleado', json, options).map(this.extractData)._catch(this.handleError);
   }

   private extractData(res: Response){
     let body = res.json();
     return body.data || {};
   }

   private handleError(error: Response){
     console.error(error);
     return Observable.throw(error.json().error || 'server error');
   }
 }

