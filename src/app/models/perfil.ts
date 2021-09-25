import { Usuario } from './usuario';
import { Bootcamp } from './bootcamp';

export interface Perfil {
    id: string;
    descripcion: string;
    linkedin: string;
    nombrE: string;
    pagweb: string;
    pais: string;
    usuario: Usuario;
    bootcamps: Bootcamp[];
}