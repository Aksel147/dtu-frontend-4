export default interface Product {
    id: string,
    name: string,
    price: number,
    currency: string,
    rebateQuantity: number,
    rebatePercent: number,
    upsellProductId: string
}