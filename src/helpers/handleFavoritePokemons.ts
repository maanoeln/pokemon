import { addPokemon, removePokemon } from '@/store/pokemonSlice';
import { AppDispatch } from '@/store/store';

export const handleFavorites = (
  id: number,
  name: string,
  isFavorite: boolean,
  dispatch: AppDispatch,
) => {
  if (isFavorite) {
    return dispatch(removePokemon(name));
  }
  dispatch(addPokemon(id, name));
};
