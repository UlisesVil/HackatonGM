import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TextAreaListComponent } from './text-area-list/text-area-list.component';
import { ModalBootcampComponent } from './modal-bootcamp/modal-bootcamp.component';


@NgModule({
  declarations: [ListComponent, ItemComponent, TextAreaListComponent, ModalBootcampComponent],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class NewsFeedModule { }
