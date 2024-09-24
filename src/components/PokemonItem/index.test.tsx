import PokemonItemComponent from '@/components/PokemonItem';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as helpers from '@/helpers/handleFavoritePokemons';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';

const mockOnClick = jest.fn();

const pokemonMock = {
  id: 1,
  name: 'bulbassaur',
};

const returnComponent = () => {
  return (
    <RenderMockedComponent>
      <PokemonItemComponent {...pokemonMock} onClick={mockOnClick} />
    </RenderMockedComponent>
  );
};

describe('PokemonItem', () => {
  it('Should render component sucessfully', async () => {
    render(returnComponent());

    expect(screen.getByText(/#0001/i)).toBeInTheDocument();
    expect(screen.getByTestId('bulbassaur')).toBeInTheDocument();
    expect(screen.getByText('Detalhes')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Detalhes'));
    expect(mockOnClick).toHaveBeenCalledWith(1, 'bulbassaur');
  });

  it('Should render heart not filled sucessfully', async () => {
    render(returnComponent());

    expect(screen.getByTestId('EmptyHeart')).toBeInTheDocument();
  });

  it('When click on heart should call function and change image to filled heart', async () => {
    const spy = jest.spyOn(helpers, 'handleFavorites');

    render(returnComponent());

    const emptyHeart = screen.getByTestId('EmptyHeart');
    await userEvent.click(emptyHeart);

    await waitFor(() => {
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId('FilledHeart')).toBeInTheDocument();
    });
  });
});
