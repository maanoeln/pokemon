import PokemonItemComponent from '@/components/PokemonItem';
import '@testing-library/jest-dom';
import { dark } from '@/css/dark';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

const mockOnClick = jest.fn();

const mockWithTheme = () => {
  return (
    <ThemeProvider theme={dark}>
      <PokemonItemComponent id={1} name="bulbassaur" onClick={mockOnClick} />
    </ThemeProvider>
  );
};

describe('PokemonItem', () => {
  it('Should render component sucessfully', async () => {
    render(mockWithTheme());

    expect(screen.getByText(/#0001/i)).toBeInTheDocument();
    expect(screen.getByTestId('bulbassaur')).toBeInTheDocument();
    expect(screen.getByText('Favoritar')).toBeInTheDocument();
    expect(screen.getByText('+ Detalhes')).toBeInTheDocument();

    await userEvent.click(screen.getByText('+ Detalhes'));
    expect(mockOnClick).toHaveBeenCalledWith('bulbassaur');
  });
});
