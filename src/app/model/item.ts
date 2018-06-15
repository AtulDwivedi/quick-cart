export interface Item {
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number
    creationDate: Date,
    expiryDate: Date,
    brand: string,
    imageUrl: string,
    otherImagesUrl: Array<string>
}