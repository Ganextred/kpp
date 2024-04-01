import { PriceConverter } from '../interfaces/PriceConverter';

export class DefaultPriceConverter implements PriceConverter {
  converterStrategy: Map<string, number> = new Map();
  currency: string;

  constructor(fromCurrency: string) {
    this.currency = fromCurrency;
    if (fromCurrency == 'USD') this.converterStrategy.set('UAN', 39);
    if (fromCurrency == 'UAN') this.converterStrategy.set('USD', 41);
  }

  convert(currency: string, amount: number): number {
    if (currency === this.currency) {
      return amount; 
    }

    const rate = this.converterStrategy.get(currency);
    if (rate === undefined) {
      throw new Error(
        `Conversion rate for currency ${currency} is not defined`
      );
    }
    return amount * rate;
  }
}
