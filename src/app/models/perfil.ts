import {Bootcamp} from './bootcamp';
import {Usuario} from './usuario';

export interface Perfil {
  id?: string;
  nombre?: string;
  linkedin?: string;
  pagweb?: string;
  pais?: string;
  descripcion?: string;
  usuario?: Usuario;
  bootcamps?: Bootcamp[];
}
