import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export interface PokemonState {
  id: number;
  name: string;
}

interface InititalState {
  favoritePokemons: PokemonState[];
  error: string | null;
}

const initialState: InititalState = {
  favoritePokemons: [],
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: {
      reducer: (state, action: PayloadAction<PokemonState>) => {
        if (state.favoritePokemons.length < 10) {
          state.favoritePokemons.push(action.payload);
          toast.success(
            `Você adicionou o pokemon ${action.payload.name} ã sua lista de favoritos!`,
          );
        } else {
          state.error = 'Você favoritou o máximo de pokemons';
          toast.warn(state.error);
        }
      },
      prepare: (id: number, name: string) => ({
        payload: {
          id,
          name,
        } as PokemonState,
      }),
    },
    removePokemon(state, action: PayloadAction<string>) {
      const filteredArray = state.favoritePokemons.filter(
        (elem) => elem.name !== action.payload,
      );

      toast.error(`Você excluiu o pokemon ${action.payload} dos favoritos!`);
      return { ...state, favoritePokemons: filteredArray };
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
