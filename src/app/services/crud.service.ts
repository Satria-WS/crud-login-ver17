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
}
