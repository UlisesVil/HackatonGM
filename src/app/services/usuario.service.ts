import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlUsuario = `${environment.HOST}/usuarios.json`;
  private urlPerfil = `${environment.HOST}/perfiles.json`;

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: Usuario) {
    return this.http.post(`${this.urlUsuario}`, usuario);
  }

  registrarPerfil(perfil: Perfil) {
    return this.http.post(`${this.urlPerfil}`, perfil);
  }
}
