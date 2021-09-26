import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from '../utils/matchPassword';
import {Perfil} from '../../models/perfil';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  entity:string;
  modal: boolean=false;

  constructor(private fb: FormBuilder) {
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
    } else {
      console.log(this.form.value);
      console.log('formulario invalido');
    }
  }


  registerActivate(entity){
    this.entity=entity;
    this.modal=true;
    console.log(entity);

  }
  modalOff(e){
    this.modal=e.modal;
  }
}
