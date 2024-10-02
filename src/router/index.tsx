import App from '@/App';
import FavoritesPage from '@/pages/Favorites';
import PokemonInfoByName from '@/pages/PokemonInfoByName';
import PokemonListPage from '@/pages/PokemonList';
import PokemonTypesPage from '@/pages/PokemonTypes';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '',
        index: true,
        element: <PokemonListPage />,
      },
      {
        path: ':id',
        element: <PokemonInfoByName />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'types',
        element: <PokemonTypesPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/pokemons' });

export default router;
