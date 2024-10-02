import PokemonSpecsButtons from '@/components/PokemonSpecsButton';
import { cleanup, screen } from '@testing-library/react';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';
import userEvent from '@testing-library/user-event';
import { mockNavigate } from '@/setupTests';

window.scrollTo = jest.fn();

describe('PokemonSpecsButton', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    cleanup();
  });

  it('Shoul render component successfully', () => {
    returnMockWithProviders(<PokemonSpecsButtons id={'1'} />);

    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByText(/previous/i)).toBeInTheDocument();
    expect(screen.getByText(/go back/i)).toBeInTheDocument();
    expect(screen.getByText(/next/i)).toBeInTheDocument();
    expect(screen.getByTestId('ArrowBackIcon')).toBeInTheDocument();
    expect(screen.getByTestId('HomeIcon')).toBeInTheDocument();
    expect(screen.getByTestId('ArrowForwardIcon')).toBeInTheDocument();
  });

  it('When id is equal to one the previous button should be disabled and the others enabled', () => {
    returnMockWithProviders(<PokemonSpecsButtons id={'1'} />);

    expect(screen.getByText(/previous/i)).toBeDisabled();

    expect(screen.getByText(/go back/i)).toBeEnabled();
    expect(screen.getByText(/next/i)).toBeEnabled();
  });

  it('When id is different of one all buttons should be enabled', () => {
    returnMockWithProviders(<PokemonSpecsButtons id={'2'} />);

    expect(screen.getByText(/previous/i)).toBeEnabled();
    expect(screen.getByText(/go back/i)).toBeEnabled();
    expect(screen.getByText(/next/i)).toBeEnabled();
  });

  it('when click on previous should call function', async () => {
    returnMockWithProviders(<PokemonSpecsButtons id={'2'} />);

    await userEvent.click(screen.getByText(/previous/i));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/1');
  });

  it('when click on go back should call function', async () => {
    returnMockWithProviders(<PokemonSpecsButtons id={'2'} />);

    await userEvent.click(screen.getByText(/go back/i));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('when click on next should call function', async () => {
    returnMockWithProviders(<PokemonSpecsButtons id={'2'} />);

    await userEvent.click(screen.getByText(/next/i));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/3');
  });
});
