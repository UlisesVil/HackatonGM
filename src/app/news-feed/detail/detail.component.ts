import {Component, Input, OnInit} from '@angular/core';
import {Bootcamp} from '../../models/bootcamp';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() bootcamp: Bootcamp = null;
  @Input() isUser: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  descriptionSet(description: string): void {
    console.log(description);
  }

}
