import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Perfil } from '../../models/perfil'
import { PasswordValidation } from '../utils/matchPassword';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  entity: string;

  constructor(
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute
    ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.entity = this.rutaActiva.snapshot.params.entity;
    console.log(this.entity);

  }

  crearFormulario(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
      pagweb: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }


  registrar(){
    if(this.form.valid) {
      let perfil = new Perfil();
      let usuario = new Usuario();

      perfil.nombre = this.form.value.nombre;
      perfil.linkedin = this.form.value.linkedin;
      perfil.pagweb = this.form.value.pagweb;
      perfil.pais = this.form.value.pais;
      perfil.descripcion = this.form.value.descripcion;
      usuario.mail = this.form.value.mail;
      usuario.clave = this.form.value.clave;
      perfil.usuario = usuario;
      //perfil.usuario.mail = this.form.value.mail;
      //perfil.usuario.clave = this.form.value.clave;

      console.log('objeto perfil');
      console.log(perfil);
      console.log(this.form.value);
      console.log('nos registramos yei');
    } else {
      console.log(this.form.value);
      console.log('formulario invalido');
    }
  }

}
