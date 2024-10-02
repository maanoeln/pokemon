import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemons = async () => {
  return api.get('/pokemon').then((res) => res);
};
