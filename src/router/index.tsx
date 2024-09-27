import App from '@/App';
import PokemonInfoByName from '@/pages/PokemonInfoByName';
import PokemonListPage from '@/pages/PokemonList';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        index: true,
        element: <PokemonListPage />,
      },
      {
        path: '/pokemon/:id',
        element: <PokemonInfoByName />,
      },
    ],
  },
]);

export default router;
