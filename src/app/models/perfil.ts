import { Usuario } from './usuario';
import { Bootcamp } from './bootcamp';

export class Perfil {
    id: string;
    nombre: string;
    linkedin: string;
    pagweb: string;
    pais: string;
    descripcion: string;
    usuario: Usuario;
    bootcamps: Bootcamp[];
}
