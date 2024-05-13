export function calcPriceWithDiscount (price: number, discountPercentage: number): string {
    return (price * (100 - discountPercentage) / 100).toFixed(2);
}
