import PokemonItemComponent from '@/components/PokemonItem';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as helpers from '@/helpers/handleFavoritePokemons';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';

const mockOnClick = jest.fn();

const pokemonMock = {
  id: 1,
  name: 'bulbassaur',
};

describe('PokemonItem', () => {
  it('Should render component sucessfully', async () => {
    returnMockWithProviders(
      <PokemonItemComponent {...pokemonMock} onClick={mockOnClick} />,
    );

    expect(screen.getByText(/#0001/i)).toBeInTheDocument();
    expect(screen.getByTestId('bulbassaur')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Details'));
    expect(mockOnClick).toHaveBeenCalledWith(1);
  });

  it('Should render heart not filled sucessfully', async () => {
    returnMockWithProviders(
      <PokemonItemComponent {...pokemonMock} onClick={mockOnClick} />,
    );

    expect(screen.getByTestId(/EmptyHeart/i)).toBeInTheDocument();
  });

  it('When click on heart should call function and change image to filled heart', async () => {
    const spy = jest.spyOn(helpers, 'handleFavorites');

    returnMockWithProviders(
      <PokemonItemComponent {...pokemonMock} onClick={mockOnClick} />,
    );

    const emptyHeart = screen.getByTestId(/EmptyHeart/i);
    await userEvent.click(emptyHeart);

    await waitFor(() => {
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId(/FilledHeart/i)).toBeInTheDocument();
    });
  });
});
