export interface Liquid {
  volume: number;
  flammable: boolean;

  can_be_taken_on_plain(): boolean;
}