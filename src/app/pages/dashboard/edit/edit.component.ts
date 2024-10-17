import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { CrudService, List } from '../../../services/crud.service';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  updateForm: FormGroup | any;
  formSubmitted: boolean = false;
  itemId!: number; // '!' This tells TypeScript that itemId will be assigned later
  item: List | undefined;

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private routeById : ActivatedRoute
  ) {
    this.updateForm = this.editForm();
  }

  ngOnInit(): void {

    //get Id
    this.routeById.params.subscribe(params => {
      this.itemId = +params['id'];
      this.item = this.crudService.listApp.find(item => item._id === this.itemId);
      if (this.item) {
        this.updateForm.patchValue({
          title: this.item.title,
          detail: this.item.text
        })
      }
    });

    console.log('onInit');
  }

  private editForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      detail: ['', Validators.required]
    })
  }

  onSubmit() {
    const formData = this.updateForm.value;
    // const findId = this.crudService.listApp.find(index => index._id === id);
    this.formSubmitted = true;


    if (this.updateForm.valid) {
      this.formSubmitted = false;
      this.crudService.updateList(this.itemId, formData);

      console.log(formData);
    }

    console.log('update here');
  }
}
