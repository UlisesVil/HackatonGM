import {Component, OnInit} from '@angular/core';
import {Bootcamp} from '../../models/bootcamp';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bootcamps: Bootcamp[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
