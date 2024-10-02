export interface IPokemonItem {
  name: string;
  url: string;
}

export interface IGetPokemonList {
  count: number | null;
  next: string | null;
  previous: null | string;
  results: IPokemonItem[];
}

interface PokemonInfoTypes {
  slot: number;
  type: { name: string };
}

interface PokemonInfoAbilities {
  ability: { name: string };
}

export interface IPokemonInfo {
  height: number;
  weight: number;
  name: string;
  base_experience: number;
  types: PokemonInfoTypes[];
  abilities: PokemonInfoAbilities[];
}
