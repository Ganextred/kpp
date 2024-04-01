import { MilkProduct } from "./MilckProduct";

describe('MilckProduct', () => {
  let milkProduct: MilkProduct;

  beforeEach(() => {
    milkProduct = new MilkProduct(1, true, 'Milck', 3);
  });

  it('milkProduct should be created', () => {
    expect(milkProduct.containsLactose).toBe(true);
    expect(milkProduct.volume).toBe(1)
    expect(milkProduct.price).toBe(3);
    expect(milkProduct.name).toBe('Milck');
  });

  it('milkProduct price should be correct', () => {
    expect(milkProduct.getPrice('USD')).toBe(3);
  });

  it('should have correct discription', () => {
    expect(milkProduct.getInfo()).toBe(
      'Milk Product, volume: 1, contains lactose: true, name: Milck, price(USD): 3'
    );
  });
});
