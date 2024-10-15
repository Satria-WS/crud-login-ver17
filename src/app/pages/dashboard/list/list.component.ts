import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CrudService, List } from '../../../services/crud.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  showList: List[];

  constructor(private crudService: CrudService) {
    this.showList = this.crudService.listApp;
   }

  // showList() {
  //   const showList = this.crudService.listApp;
  //   console.log(showList);
  //   return showList;
  // }
}
