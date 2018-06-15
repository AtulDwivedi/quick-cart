import { Item } from "../model/item";

export class ItemMock {


    ItemMock() {
        
    }

    getItemById(itemId: string): Item {
        return ITEMS.filter(item => itemId === item.id)[0];
    }

    getItems(): Item[] {
        return ITEMS;
    }
}

const ITEMS: Item[] = [
    {
        id: "ITM_1001",
        name: "Item 1001",
        description: "Item 1001 Description",
        price: 1001.10,
        quantity: 1001,
        creationDate: new Date("Dec 21, 1965"),
        expiryDate: new Date("Dec 21, 1966"),
        brand: "Apple",
        imageUrl: "assets/images/item/1001.png",
        otherImagesUrl: ["assets/images/item/1001.png"]
    },
    {
        id: "ITM_1002",
        name: "Item 1002",
        description: "Item 1002 Description",
        price: 1001.10,
        quantity: 1001,
        creationDate: new Date("Dec 21, 1975"),
        expiryDate: new Date("Dec 21, 1976"),
        brand: "Google",
        imageUrl: "assets/images/item/1002.png",
        otherImagesUrl: ["assets/images/item/1002.png"]
    },
    {
        id: "ITM_1001",
        name: "Item 1001",
        description: "Item 1001 Description",
        price: 1001.10,
        quantity: 1001,
        creationDate: new Date("Dec 21, 1965"),
        expiryDate: new Date("Dec 21, 1966"),
        brand: "Apple",
        imageUrl: "assets/images/item/1001.png",
        otherImagesUrl: ["assets/images/item/1001.png"]
    },
    {
        id: "ITM_1002",
        name: "Item 1002",
        description: "Item 1002 Description",
        price: 1001.10,
        quantity: 1001,
        creationDate: new Date("Dec 21, 1975"),
        expiryDate: new Date("Dec 21, 1976"),
        brand: "Google",
        imageUrl: "assets/images/item/1002.png",
        otherImagesUrl: ["assets/images/item/1002.png"]
    },
    {
        id: "ITM_1001",
        name: "Item 1001",
        description: "Item 1001 Description",
        price: 1001.10,
        quantity: 1001,
        creationDate: new Date("Dec 21, 1965"),
        expiryDate: new Date("Dec 21, 1966"),
        brand: "Apple",
        imageUrl: "assets/images/item/1001.png",
        otherImagesUrl: ["assets/images/item/1001.png"]
    },
    {
        id: "ITM_1002",
        name: "Item 1002",
        description: "Item 1002 Description",
        price: 1001.10,
        quantity: 1001,
        creationDate: new Date("Dec 21, 1975"),
        expiryDate: new Date("Dec 21, 1976"),
        brand: "Google",
        imageUrl: "assets/images/item/1002.png",
        otherImagesUrl: ["assets/images/item/1002.png"]
    }   
]
