import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from '../utils/matchPassword';
import {Perfil} from '../../models/perfil';
import {Usuario} from '../../models/usuario';
import {Router} from '@angular/router';
import {USERMOCKEM, USERMOCKUS} from '../../models/mocks';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  entity: string;
  modal: boolean;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }


  crearFormulario(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }


  login(): void {
    console.log('nos logeamos aqui');
    this.redirectList(USERMOCKUS);
  }


  registerActivate(entity): void {
    this.entity = entity;
    this.modal = true;
    console.log(entity);
    if (this.form.valid) {
      const usuario: Usuario = {
        mail: this.form.value.mail,
        clave: this.form.value.clave
      };
      const perfil: Perfil = {
        nombre: this.form.value.nombre,
        usuario
      };
      console.log('objeto perfil');
      console.log(perfil);
      console.log(this.form.value);
      console.log('nos registramos yei');
      this.redirectList(USERMOCKUS);
    } else {
      console.log(this.form.value);
      console.log('formulario invalido');
    }
  }

  redirectList(usuario: Usuario): void {
    this.router.navigate(['/news-feed/list'], {
      queryParams: {
        id: usuario.id,
        rol: usuario.rol
      }
    });
  }

  modalOff(e): void {
    this.modal = e.modal;
  }
}

