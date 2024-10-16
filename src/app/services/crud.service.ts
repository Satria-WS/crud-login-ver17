import { Injectable } from '@angular/core';

export interface List {
  _id: number;
  title: string;
  text: string;
}
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor() {}

  listApp: List[] = [
    { _id: 1, title: 'sample_1', text: 'Todo sample_1' },
    { _id: 2, title: 'sample_2', text: 'Todo sample_2' },
    { _id: 3, title: 'sample_3', text: 'Todo sample_3' },
  ];

  addList(formData: { title: string; detail: string }): void {
    const newItem: List = {
      _id: this.listApp.length + 1,
      title: formData.title,
      text: formData.detail,
    };
    this.listApp.push(newItem);
    console.log('Updated showList:', this.listApp);
  }

  deleteList(id: number): void {
    const findIndex = this.listApp.findIndex(index => index._id === id);

    if (findIndex !== -1) {
      this.listApp.splice(findIndex, 1);
    } else {
      console.warn('id tidak di temukan');
    }
  }

}
