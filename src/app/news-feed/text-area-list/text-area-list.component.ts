import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-text-area-list',
  templateUrl: './text-area-list.component.html',
  styleUrls: ['./text-area-list.component.css']
})
export class TextAreaListComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Output() descriptionValue = new EventEmitter<string>();

  formInput: FormGroup;
  get descriptionFC(): FormControl {
    return this.formInput.get('descriptionFC') as FormControl;
  }
  constructor() {
    this.crearFormulario();
  }

  ngOnInit(): void {
    console.log(this.description);
    this.descriptionFC.valueChanges.subscribe(() => {
      this.sendDescription();
    });
    this.descriptionFC.setValue(this.description);
  }

  crearFormulario(): void {
    this.formInput = new FormGroup({
      descriptionFC: new FormControl('', [Validators.required])
    });
  }

  sendDescription(): void {
    this.descriptionValue.emit(this.descriptionFC.value)
  }

}
