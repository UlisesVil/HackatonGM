import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from 'src/app/models/usuario';
import {Perfil} from '../../models/perfil';
import {PasswordValidation} from '../utils/matchPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() entity: string;
  @Output() deactivateRegister: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
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


  registrar(): void {
    if (this.form.valid) {
      const usuario: Usuario = {
        mail: this.form.value.mail,
        clave: this.form.value.clave
      };
      const perfil: Perfil = {
        nombre: this.form.value.nombre,
        linkedin: this.form.value.linkedin,
        pagweb: this.form.value.pagweb,
        pais: this.form.value.pais,
        descripcion: this.form.value.descripcion,
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

  modalOff() {
    this.deactivateRegister.emit({
      modal: false,
      errorWarning: null
    });
  }
}
