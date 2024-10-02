import { api } from '@/services/api';
import { cleanup, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';
import PokemonInfoByName from '@/pages/PokemonInfoByName';
import { mockParams } from '@/setupTests';

window.scrollTo = jest.fn();

let axiosMock: MockAdapter;

const data = {
  name: 'charmeleon',
  abilities: [
    {
      ability: {
        name: 'blaze',
        url: 'https://pokeapi.co/api/v2/ability/66/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'solar-power',
        url: 'https://pokeapi.co/api/v2/ability/94/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 142,
  height: 11,
  types: [
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
    },
  ],
  weight: 190,
};

const url = `pokemon/5`;
const createMock = () => axiosMock.onGet(url).reply(200, data);

describe('PokemonInfoByName', () => {
  afterEach(cleanup);
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    axiosMock.resetHistory();
    mockParams.mockReturnValue({ id: '5' });
  });

  beforeAll(() => {
    axiosMock = new MockAdapter(api);
  });

  it('sould render page with pokemon info', async () => {
    createMock();

    returnMockWithProviders(<PokemonInfoByName />);

    await waitFor(() => {
      expect(axiosMock.history.get.length).toBe(1);
      expect(axiosMock.history.get[0].url).toBe(url);
    });

    expect(screen.getByTestId('bars-loading')).toBeInTheDocument();

    expect(await screen.findByText(/charmeleon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/EmptyHear/i)).toBeInTheDocument();
    expect(screen.getByAltText(/charmeleon/i)).toBeInTheDocument();
    expect(screen.getByText(/Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Height/i)).toBeInTheDocument();
    expect(screen.getByText(/Weight/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/142/i)).toBeInTheDocument();
    expect(screen.getByText(/11/i)).toBeInTheDocument();
    expect(screen.getByText(/190/i)).toBeInTheDocument();

    expect(screen.getByText(/types/i)).toBeInTheDocument();
    expect(screen.getByText(/fire/i)).toBeInTheDocument();

    expect(screen.getByText(/abilities/i)).toBeInTheDocument();
    expect(screen.getByText(/blaze/i)).toBeInTheDocument();
    expect(screen.getByText(/solar-power/i)).toBeInTheDocument();
  });

  it('should be able to favorite the pokemos and show favorites button', async () => {
    returnMockWithProviders(<PokemonInfoByName />);

    await waitFor(() => {
      expect(axiosMock.history.get.length).toBe(1);
      expect(axiosMock.history.get[0].url).toBe(url);
    });

    const emptyHeart = await screen.findByTestId(/EmptyHeart/i);
    await userEvent.click(emptyHeart);
    expect(await screen.findByTestId(/FilledHeart/i)).toBeInTheDocument();
  });
});
