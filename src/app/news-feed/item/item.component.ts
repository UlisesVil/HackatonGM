import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Bootcamp} from '../../models/bootcamp';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  formInput: FormGroup;
  @Input() bootcamp: Bootcamp = null;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(): void {
    this.formInput = this.fb.group({
      description: ['', [Validators.required]]
    });
  }

}
