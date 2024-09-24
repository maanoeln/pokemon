import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemons from './pokemonSlice';
import theme from './themeSlice';

const reducers = combineReducers({ pokemons, theme });

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
