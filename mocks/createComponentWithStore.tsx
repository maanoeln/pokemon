import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { dark } from '../src/css/dark';
import { ReactNode } from 'react';
import { toast } from 'react-toastify';

interface IProps {
  children: ReactNode;
}

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
        } else {
          state.error = 'Você favoritou o máximo de pokemons';
          toast(state.error);
        }
      },
      prepare: (id: number, name: string) => ({
        payload: {
          id,
          name,
        } as PokemonState,
      }),
    },
    removePokemon(state, action: PayloadAction<number>) {
      const index = state.pokemons.findIndex(
        (pok) => pok.id === action.payload,
      );
      state.pokemons.splice(index, 1);
    },
  },
});

const mockStore = configureStore({ reducer: pokemonSlice.reducer });

const RenderMockedComponent = ({ children }: IProps) => {
  return (
    <Provider store={mockStore}>
      <ThemeProvider theme={dark}>{children}</ThemeProvider>
    </Provider>
  );
};

export default RenderMockedComponent;
