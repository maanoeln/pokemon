export interface IPokemonItem {
  name: string;
  url: string;
}

export interface IGetPokemonList {
  count: number;
  next: string;
  previous: null | string;
  results: IPokemonItem[];
}
