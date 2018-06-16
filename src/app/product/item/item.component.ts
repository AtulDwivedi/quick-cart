import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];

  constructor(itemService: ItemService) {
    this.items = itemService.getItems();
  }

  ngOnInit() {
  }

  getItemById(itemId: string): Item {
    // return itemService.getItemById(itemId);
    return null;
  }

  buy(){

  }

  addToCart(){
    console.log("Adding to cart.")
  }

}
