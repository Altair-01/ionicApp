import { Injectable } from '@angular/core';

export interface Item {
  id: number,
  title: string,
  value: string,
  modified: number
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
  // create
  addItem(item: Item){

  }
  // read
  getItems() {}
    // update
    updateItem(item: Item){

    }
      // delete
  deleteItem(item: Item){

  }

}
