import { Usuario } from './usuario';
import { Bootcamp } from './bootcamp';

export interface Perfil {
    id: string;
    nombre: string;
    linkedin: string;
    pagweb: string;
    pais: string;
    descripcion: string;
    usuario: Usuario;
    password: string;
    bootcamps: Bootcamp[];
}
