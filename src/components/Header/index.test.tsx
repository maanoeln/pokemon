import HeaderComponent from '@/components/Header';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';
import { render, screen } from '@testing-library/react';
import { PokemonState } from '@/store/pokemonSlice';

const pokemon = [{ id: 1, name: 'bulbassaur' }];

const returnComponent = (pokemons?: PokemonState[]) => {
  return (
    <RenderMockedComponent pokemons={pokemons}>
      <HeaderComponent />
    </RenderMockedComponent>
  );
};

describe('Header', () => {
  it('ensure header componenet renders successfully and does not have a favorite pokemon', () => {
    render(returnComponent());

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Favoritos')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('ensure header componenet renders successfully and does have a favorite pokemon text should change', () => {
    render(returnComponent(pokemon));

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Favoritos (1)')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeEnabled();
  });
});
