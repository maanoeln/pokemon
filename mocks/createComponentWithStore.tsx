import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { dark } from '../src/theme/dark';
import { ReactNode } from 'react';
import { toast } from 'react-toastify';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/locales/i18next';

interface IProps {
  children: ReactNode;
  pokemons?: PokemonState[];
}

export interface PokemonState {
  id: number;
  name: string;
}

interface InititalState {
  pokemons: PokemonState[];
  error: string | null;
}

const initialState = (pokemons?: PokemonState[]): InititalState => {
  return {
    pokemons: pokemons ? pokemons : [],
    error: null,
  };
};

const pokemonSlice = (pokemons?: PokemonState[]) =>
  createSlice({
    name: 'pokemon',
    initialState: initialState(pokemons),
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

const mockStore = (pokemons?: PokemonState[]) =>
  configureStore({
    reducer: {
      pokemons: pokemonSlice(pokemons).reducer,
    },
  });

const RenderMockedComponent = ({ children, pokemons }: IProps) => {
  return (
    <Provider store={mockStore(pokemons)}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={dark}>{children}</ThemeProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default RenderMockedComponent;
