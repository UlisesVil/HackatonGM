import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-text-area-list',
  templateUrl: './text-area-list.component.html',
  styleUrls: ['./text-area-list.component.css']
})
export class TextAreaListComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() isUser: boolean;
  @Output() descriptionValue = new EventEmitter<string>();

  formInput: FormGroup = new FormGroup({
    descriptionFC: new FormControl('', [Validators.required])
  });
  get descriptionFC(): AbstractControl {
    return this.formInput.get('descriptionFC') as AbstractControl;
  }
  constructor() {
  }

  ngOnInit(): void {
    if (!this.isUser) {
      this.descriptionFC.disable();
    }
    this.descriptionFC.valueChanges.subscribe(() => {
      this.sendDescription();
    });
    this.descriptionFC.setValue(this.description);
    // if (this.isUser) {
    //   this.descriptionFC.disabled();
    // }
  }

  sendDescription(): void {
    this.descriptionValue.emit(this.descriptionFC.value);
  }

}
