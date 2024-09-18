import { IGetPokemonList } from '@/services/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const getPokemons = () => {
  return api.get<IGetPokemonList>('', {
    params: {
      limit: 20,
      offset: 0,
    },
  });
};

export const getPokemnonByName = (name: string) => {
  return api.get(`/${name}`);
};
