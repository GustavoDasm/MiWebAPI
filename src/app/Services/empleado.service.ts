import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appSetting } from '../settings/appsettings';
import { Empleado } from '../models/Empleado';
import { ResponseAPI } from '../models/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private http = inject(HttpClient)
  private apiURL: string = appSetting.apiURL + "Empleado"
  
  constructor() { }

  lista(){
    return this.http.get<Empleado>(this.apiURL);
  }

  obtener(id: number){
    return this.http.get<Empleado>(`${this.apiURL}/${id}`);
  }

  crear(objeto: Empleado){
    return this.http.post<ResponseAPI>(this.apiURL,objeto);
  }

  editar(objeto: Empleado){
    return this.http.put<ResponseAPI>(this.apiURL,objeto);
  }

  eliminar(id: number){
    return this.http.delete<ResponseAPI>(`${this.apiURL}/${id}`);
  }
}
