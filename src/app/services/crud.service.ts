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
    // const maxId = this.listApp.reduce((max, item) => (item._id > max ? item._id : max), 0);
    const maxId = this.listApp.reduce((_, item) => item._id, 0);
    const newItem: List = {
      _id: maxId + 1, // Increment the maximum _id found
      title: formData.title,
      text: formData.detail,
    };
    this.listApp.push(newItem);
    console.log('Add showList:', this.listApp);
  }

  updateList(id: number, formData: { title: string; detail: string }): void {
    const findIndex = this.listApp.findIndex(index => index._id === id);
    if (findIndex !== -1) {
      this.listApp[findIndex].title = formData.title;
      this.listApp[findIndex].text = formData.detail;
      console.log(' Updated showList:', this.listApp);
    } else {
      console.log('data tidak bisa di update');
    }
  }

  deleteList(id: number): void {
    const findIndex = this.listApp.findIndex(index => index._id === id);

    if (findIndex !== -1) {
      this.listApp.splice(findIndex, 1);
      console.log(' delete showList:', this.listApp);
    } else {
      console.warn('id tidak di temukan');
    }
  }

}
