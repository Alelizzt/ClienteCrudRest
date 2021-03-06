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
   getEmpleado(id){
     return this._http.get(this.url+'empleado/'+id).map(res => res.json());
   }

   addEmpleado(empleado : Empleado){
   		let json = JSON.stringify(empleado);
      console.log('esto es lo que envio'+json); 
   		//let params = 'json='+json; just in php 
   		let headers = new Headers({'Content-Type':'application/json'}); // in php use: 'application/x-www-form-urlencoded; charset=UTF-8'
      let options = new RequestOptions({ headers: headers });

   		return this._http.post(this.url+'empleado', json, options).map(this.extractData)._catch(this.handleError);
   }

   editEmpleado(id, empleado:Empleado){
     let json = JSON.stringify(empleado);
     //let params = 'json='+json; just in php 
      let headers = new Headers({'Content-Type':'application/json'}); // in php use: 'application/x-www-form-urlencoded; charset=UTF-8'
      let options = new RequestOptions({ headers: headers });

      return this._http.put(this.url+'empleado/'+id, json, options)
                .map(this.extractData)._catch(this.handleError);
   }

   deleteEmpleado(id){
     return this._http.delete(this.url+'empleado/'+id).map(this.extractData);
   }

   private extractData(res: Response){
     let body = res.json();
     return body.data || {};
   }

   private handleError(error: Response){
     console.error(error);
     return Observable.throw(error.json().error || 'server error');
   }

   /*Metodo para subir imagenes*/
   makeFileRequest(url: string, params: Array<string>, files: Array<File>){
     return new Promise((resolve, reject )=>{
       var formData: any = new FormData();
       var xhr = new XMLHttpRequest();

       for (var i =0; files.length ; i++){
         formData.append('uploads[]', files[i], files[i].name);
       }

       xhr.onreadystatechange = function(){
         if(xhr.readyState == 4){
           if(xhr.status == 200){
               resolve(JSON.parse(xhr.response));
           }else{
               reject(xhr.response);
           }
         }
       };

       xhr.open("POST", url, true);
       xhr.send(formData);

     });
   }
 }

