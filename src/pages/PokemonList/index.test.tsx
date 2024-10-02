import MockAdapter from 'axios-mock-adapter';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';
import {
  pokemonListResponse,
  pokemonListResponse2,
} from '../../../mocks/pokemonListResponse';
import PokemonListPage from '@/pages/PokemonList';
import { api } from '@/services/api';
import { cleanup, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockNavigate } from '@/setupTests';

let axiosMock: MockAdapter;
const data = pokemonListResponse;
const data2 = pokemonListResponse2;

window.scrollTo = jest.fn();

describe('PokemonList', () => {
  beforeEach(() => {
    axiosMock = new MockAdapter(api);
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  beforeAll(cleanup);

  afterEach(() => {
    cleanup();
    axiosMock.resetHistory();
    axiosMock.reset();
  });

  it('Should render first page with pokemons list', async () => {
    axiosMock
      .onGet('pokemon')
      .replyOnce(200, data)
      .onGet('pokemon')
      .reply(200, data2);

    const { container } = returnMockWithProviders(<PokemonListPage />);

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
    expect(screen.getAllByText('…')).toHaveLength(1);
    expect(container.querySelectorAll('svg')).toHaveLength(24);

    await userEvent.click(screen.getByText('2'));
    expect(axiosMock.history.get.length).toBe(2);
    expect(axiosMock.history.get[1].url).toBe('pokemon');
    expect(axiosMock.history.get[1].params).toStrictEqual({
      limit: '20',
      offset: '21',
    });

    expect(screen.queryByText('Ivysaur')).not.toBeInTheDocument();
    expect(screen.getByText('Fearow')).toBeInTheDocument();
    expect(screen.getByText('#0022')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('details-22'));
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenLastCalledWith('22');
  });
});
