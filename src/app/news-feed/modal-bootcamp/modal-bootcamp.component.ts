import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bootcamp} from '../../models/bootcamp';

@Component({
  selector: 'app-modal-bootcamp',
  templateUrl: './modal-bootcamp.component.html',
  styleUrls: ['./modal-bootcamp.component.css']
})
export class ModalBootcampComponent implements OnInit {

  @Input() modal: boolean;
  @Input() bootcamp: Bootcamp;
  @Output() deactivateRegister: EventEmitter<any> = new EventEmitter();

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  get title(): FormControl{
    return this.form.get('title') as FormControl;
  }

  get description(): FormControl{
    return this.form.get('description') as FormControl;
  }

  constructor() {
  }

  ngOnInit(): void {
    if (this.bootcamp) {
      this.initData(this.bootcamp);
    }
  }

  initData(bootcamp: Bootcamp): void {
    this.form.patchValue({
      title: bootcamp.title,
      description: bootcamp.descripcion
    });
  }

  modalOff(): void {
    this.deactivateRegister.emit({
      modal: false,
      errorWarning: null
    });
  }

}
