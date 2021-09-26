import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-text-area-list',
  templateUrl: './text-area-list.component.html',
  styleUrls: ['./text-area-list.component.css']
})
export class TextAreaListComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Input() description: string;
  @Input() isUser: boolean;
  areDetailsObs: Subscription;
  descriptionObs: Subscription;
  $areDetailsV: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  @Input() set areDetails(details: boolean) {
    this.$areDetailsV.next(!!details);
  }

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
    // if (!this.isUser) {
    //   this.areDetailsObs = this.$areDetailsV.subscribe((value) => {
    //     if (!value) {
    //       this.descriptionFC.disable();
    //     } else {
    //       this.descriptionFC.enable();
    //     }
    //   });
    // } else {
    //   this.descriptionFC.disable();
    // }
    // this.descriptionObs = this.descriptionFC.valueChanges.subscribe(() => {
    //   this.sendDescription();
    // });
    // this.descriptionFC.setValue(this.description);
  }

  sendDescription(): void {
    this.descriptionValue.emit(this.descriptionFC.value);
  }

  ngOnDestroy(): void {
    this.areDetailsObs.unsubscribe();
    this.descriptionObs.unsubscribe();
  }

}
