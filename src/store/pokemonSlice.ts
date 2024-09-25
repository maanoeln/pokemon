import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export interface PokemonState {
  id: number;
  name: string;
}

interface InititalState {
  pokemons: PokemonState[];
  error: string | null;
}

const initialState: InititalState = {
  pokemons: [],
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: {
      reducer: (state, action: PayloadAction<PokemonState>) => {
        if (state.pokemons.length < 10) {
          state.pokemons.push(action.payload);
          toast.success(
            `Você adicionou o pokemons ${action.payload.name} ã sua lista de facoritos!`,
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
      const filteredArray = state.pokemons.filter(
        (elem) => elem.name !== action.payload,
      );

      state.pokemons = filteredArray;
      toast.error(
        `Você excluiu o pokemons ${action.payload} da sua lista de facoritos!`,
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
