export interface PriceConverter{
    convert(currency: string, amount: number): number
}