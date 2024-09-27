import HeaderComponent from '@/components/Header';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';
import { render, screen, waitFor } from '@testing-library/react';
import { PokemonState } from '@/store/pokemonSlice';
import userEvent from '@testing-library/user-event';

const pokemon = [{ id: 1, name: 'bulbassaur' }];

const returnComponent = (pokemons?: PokemonState[]) => {
  return (
    <RenderMockedComponent pokemons={pokemons}>
      <HeaderComponent />
    </RenderMockedComponent>
  );
};

describe('Header', () => {
  it('ensure header componenet renders successfully and does not have a favorite pokemon', async () => {
    render(returnComponent());

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('SettingsIcon')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.queryByText('Favorito')).not.toBeInTheDocument();
    expect(screen.getByText('Configurações')).toBeInTheDocument();
    expect(screen.getByText('Configurações')).toBeEnabled();
  });

  it('ensure header componenet renders successfully and does have a favorite pokemon text should change', () => {
    const { container } = render(returnComponent(pokemon));

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Favorito')).toBeEnabled();
    expect(container.querySelectorAll('span')[1]).not.toHaveClass(
      /-invisible/i,
    );
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('ensure when user click on settings it opens the menu', async () => {
    render(returnComponent(pokemon));

    const settings = screen.getByText('Configurações');
    await userEvent.click(settings);

    await waitFor(async () => {
      expect(screen.getByText('Idiomas')).toBeInTheDocument();
      expect(screen.getByText('Português')).toBeInTheDocument();
      expect(screen.getByText('Inglês')).toBeInTheDocument();
      expect(screen.getByText('Tema')).toBeInTheDocument();
      expect(screen.getByText('Dark')).toBeInTheDocument();
      expect(screen.getByText('Light')).toBeInTheDocument();
      expect(screen.getByAltText('USA')).toBeInTheDocument();
      expect(screen.getByAltText('Brasil')).toBeInTheDocument();
      expect(screen.getByTestId('LightModeIcon')).toBeInTheDocument();
      expect(screen.getByTestId('DarkModeIcon')).toBeInTheDocument();
    });
  });

  it('user should be able to change language', async () => {
    render(returnComponent(pokemon));

    const settings = screen.getByText('Configurações');
    await userEvent.click(settings);

    await waitFor(async () => {
      expect(screen.getByText('Idiomas')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText('Inglês'));
    expect(screen.queryByText('Idiomas')).not.toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
  });
});
