import { Injectable } from '@angular/core';
import { ItemMock } from '../mock/item.mock';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  itemMock: ItemMock;
  
  constructor() {
    this.itemMock = new ItemMock();
  }

  getItemById(itemId: string): Item {
    return this.itemMock.getItemById(itemId);
  }

  getItems(): Item[] {
    return this.itemMock.getItems();
  }
}
