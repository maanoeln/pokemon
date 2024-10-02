import MockAdapter from 'axios-mock-adapter';
import { cleanup, screen, waitFor } from '@testing-library/react';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';
import { pokemonTypes } from '../../../mocks/pokemonTypes';
import { api } from '@/services/api';
import PokemonTypesPage from '@/pages/PokemonTypes';

window.scrollTo = jest.fn();

let axiosMock: MockAdapter;
const url = `type`;
const data = pokemonTypes;

describe('Pokemon types', () => {
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
    axiosMock.onGet(url).reply(200, data);

    returnMockWithProviders(<PokemonTypesPage />);

    expect(axiosMock.history.get.length).toBe(1);
    expect(axiosMock.history.get[0].url).toBe('type');

    await waitFor(() => {
      expect(screen.getByText('Normal')).toBeInTheDocument();
      expect(screen.getAllByTestId(/type-/i)).toHaveLength(18);
    });
  });
});
