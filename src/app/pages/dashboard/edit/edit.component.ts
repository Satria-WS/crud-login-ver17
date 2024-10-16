import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { CrudService } from '../../../services/crud.service';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  updateForm: FormGroup | any;
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private crudService : CrudService
  ) {

  }

  onSubmit() {
    console.log('update here');
  }
}
