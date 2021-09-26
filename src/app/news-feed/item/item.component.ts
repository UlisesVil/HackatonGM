import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bootcamp} from '../../models/bootcamp';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() bootcamp: Bootcamp = null;
  @Input() isUser: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  descriptionSet(description: string): void {
    console.log(description);
  }

}
