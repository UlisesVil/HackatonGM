import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Perfil } from '../../models/perfil'
import { PasswordValidation } from '../utils/matchPassword';
import { ActivatedRoute, Params } from '@angular/router';

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


  login(){
    if(this.form.valid) {
      let perfil = new Perfil();
      let usuario = new Usuario();

      perfil.nombre = this.form.value.nombre;
      usuario.mail = this.form.value.mail;
      usuario.clave = this.form.value.clave;
      perfil.usuario = usuario;

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
