import MockAdapter from 'axios-mock-adapter';
import { api } from '@/services/api';
import { cleanup, waitFor, screen } from '@testing-library/react';
import { returnMockWithProviders } from '../mocks/createComponentWithStore';
import { pokemonListResponse } from '../mocks/pokemonListResponse';
import userEvent from '@testing-library/user-event';
import { mockParams } from '@/setupTests';

let axiosMock: MockAdapter;
const data = pokemonListResponse;

window.scrollTo = jest.fn();

describe('PokemonList', () => {
  beforeEach(() => {
    axiosMock = new MockAdapter(api);
    jest.clearAllMocks();
    jest.restoreAllMocks();
    mockParams.mockReturnValue({ id: '5' });
  });

  beforeAll(cleanup);

  afterEach(() => {
    cleanup();
    axiosMock.resetHistory();
    axiosMock.reset();
  });

  it('Should render first page with pokemons list', async () => {
    axiosMock.onGet('pokemon').replyOnce(200, data);

    returnMockWithProviders();

    await waitFor(() =>
      expect(screen.getByTestId(/logo/i)).toBeInTheDocument(),
    );
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('SettingsIcon')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Types')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeEnabled();

    expect(axiosMock.history.get.length).toBe(1);
    expect(axiosMock.history.get[0].url).toBe('pokemon');
    expect(axiosMock.history.get[0].params).toStrictEqual({
      limit: '20',
      offset: '0',
    });

    await waitFor(() => {
      expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    });
    expect(screen.getByText('Ivysaur')).toBeInTheDocument();
    data.results.forEach(({ name }) =>
      expect(screen.getByTestId(name)).toBeInTheDocument(),
    );
    expect(screen.getAllByText('…')).toHaveLength(1);
  });

  it('Should be able to add a pokemon to favorites', async () => {
    axiosMock.onGet('pokemon').replyOnce(200, data);

    returnMockWithProviders();

    expect(screen.queryByText('Favorite')).not.toBeInTheDocument();

    expect(axiosMock.history.get.length).toBe(1);
    expect(axiosMock.history.get[0].url).toBe('pokemon');
    expect(axiosMock.history.get[0].params).toStrictEqual({
      limit: '20',
      offset: '0',
    });

    await waitFor(() => {
      expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    });

    await userEvent.click(screen.getAllByTestId(/EmptyHeart/)[0]);
    expect(screen.getByTestId(/FilledHeart/)).toBeInTheDocument();
    expect(screen.getByText(/O pokemon/i)).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });

  it('Should show messsage when maximum amount of pokemon is reached', async () => {
    axiosMock.onGet('pokemon').replyOnce(200, data);
    const favoritePokemons = pokemonListResponse.results
      .map((elem, idx) => ({ name: elem.name, id: idx + 1 }))
      .slice(0, 10);

    returnMockWithProviders(undefined, {
      preloadedState: { pokemons: { favoritePokemons, error: null } },
    });

    expect(axiosMock.history.get.length).toBe(1);
    expect(axiosMock.history.get[0].url).toBe('pokemon');
    expect(axiosMock.history.get[0].params).toStrictEqual({
      limit: '20',
      offset: '0',
    });

    await waitFor(() => {
      expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
      expect(screen.getAllByTestId(/FilledHeart/i)).toHaveLength(10);
      expect(screen.getAllByTestId(/EmptyHeart/i)).toHaveLength(10);
    });

    await userEvent.click(screen.getAllByTestId(/EmptyHeart/i)[0]);
    expect(screen.getByText(/Você favoritou/i)).toBeInTheDocument();
  });

  it('Should show messsage when pokemon is removed from favorites', async () => {
    axiosMock.onGet('pokemon').replyOnce(200, data);
    const favoritePokemons = pokemonListResponse.results
      .map((elem, idx) => ({ name: elem.name, id: idx + 1 }))
      .slice(0, 1);

    returnMockWithProviders(undefined, {
      preloadedState: { pokemons: { favoritePokemons, error: null } },
    });

    expect(axiosMock.history.get.length).toBe(1);
    expect(axiosMock.history.get[0].url).toBe('pokemon');
    expect(axiosMock.history.get[0].params).toStrictEqual({
      limit: '20',
      offset: '0',
    });

    await waitFor(() => {
      expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    });

    expect(screen.getAllByTestId(/FilledHeart/i)).toHaveLength(1);
    await userEvent.click(screen.getAllByTestId(/FilledHeart/i)[0]);

    expect(screen.getByText(/Você excluiu o pokemon/i)).toBeInTheDocument();
  });
});
