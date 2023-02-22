import Product from "./Product";

export default interface Item {
    quantity: number,
    giftWrap: boolean,
    product: Product
}