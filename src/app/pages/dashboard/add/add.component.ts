import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CrudService, List } from '../../../services/crud.service';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit {
  addForm: FormGroup | any;
  showList: List[];
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService
  ) {
    this.showList = crudService.listApp;
    this.addForm = this.createForm();
  }

  ngOnInit(): void {
    console.log(this.showList);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      detail: ['', Validators.required],
    });
  }

  private addList(formData: { title: string; detail: string }): void {
    const newItem: List = {
      _id: this.showList.length + 1,
      title: formData.title,
      text: formData.detail,
    };
    this.showList.push(newItem);
    console.log('Updated showList:', this.showList);
  }

  onSubmit(): void {
    const formData = this.addForm.value;
    this.formSubmitted = true;

    if (this.addForm.valid) {
      this.formSubmitted = false;

      this.addList(formData);
      // this.addForm.reset();
    } else {
      console.warn('form is invalid');
    }
  }
}
