import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';
import FavoritesPage from '@/pages/Favorites';
import { pokemonListResponse } from '../../../mocks/pokemonListResponse';

window.scrollTo = jest.fn();

describe('Favorite Pokemos Page', () => {
  afterEach(cleanup);
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  beforeAll(() => {});

  it('sould render page with message saying there is no favorites', () => {
    returnMockWithProviders(<FavoritesPage />);

    expect(screen.getByText(/favorites/i)).toBeInTheDocument();
    expect(screen.getByText(/you can have/i)).toBeInTheDocument();
    expect(screen.getByText(/you do not have/i)).toBeInTheDocument();
  });

  it('should be able to remove favorite', async () => {
    const favoritePokemons = pokemonListResponse.results
      .map((elem, idx) => ({ name: elem.name, id: idx + 1 }))
      .slice(0, 1);
    returnMockWithProviders(<FavoritesPage />, {
      preloadedState: {
        pokemons: {
          favoritePokemons,
          error: null,
        },
      },
    });

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByTestId(/FilledHeart/i)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(/FilledHeart/i));

    expect(screen.queryByText(/EmptyHeart/i)).not.toBeInTheDocument();
  });
});
