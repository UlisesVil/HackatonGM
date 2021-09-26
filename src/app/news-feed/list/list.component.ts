import {Component, OnInit} from '@angular/core';
import {Bootcamp} from '../../models/bootcamp';
import {ActivatedRoute} from '@angular/router';
import {BOOTCAMPS_EMPRESA, BOOTCAMPS_USUARIO} from '../../models/mocks';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bootcamps: Bootcamp[] = [];
  idUsuario: string = null;
  rolUsuario: string = null;

  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    this.route
      .queryParams
      .subscribe(async (params) => {
        if (params.id && params.rol) {
          this.idUsuario = params.id;
          this.rolUsuario = params.rol;
          await this.getBootcamps(this.idUsuario);
        } else {
          console.log('error, en los parametros');
          throw new Error('El id no se obtuvo');
        }
      });
  }

  async getBootcamps(idUser: string): Promise<void> {
    if (this.rolUsuario === 'empresa') {
      this.bootcamps = BOOTCAMPS_EMPRESA;
    } else {
      this.bootcamps = BOOTCAMPS_USUARIO;
    }
  }

}
