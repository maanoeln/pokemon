import { PokemonState } from '@/store/pokemonSlice';

export const isPokemonFavorite = (
  pokemons: PokemonState[],
  id: number,
): boolean => pokemons.map((elem) => elem.id).includes(id);
