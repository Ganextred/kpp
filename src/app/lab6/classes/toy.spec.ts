import { Toy } from "./Toy";

describe('Toy', () => {
  let toy: Toy;

  beforeEach(() => {
    toy = new Toy(3, 'lightsaber', 10);
  });

  it('toy should be created', () => {
    expect(toy.minimumAge).toBe(3)
    expect(toy.price).toBe(10);
    expect(toy.name).toBe('lightsaber');
  });

  it('should have correct discription', () => {
    expect(toy.getInfo())
    .toBe('Toy, minimumAge: 3, name: lightsaber, price(USD): 10');
  });

});
