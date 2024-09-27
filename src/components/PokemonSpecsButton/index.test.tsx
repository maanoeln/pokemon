import PokemonSpecsButtons from '@/components/PokemonSpecsButton';
import { cleanup, render, screen } from '@testing-library/react';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';
import userEvent from '@testing-library/user-event';
import { mockNavigate } from '@/setupTests';

const returnComponent = (id?: string) => {
  return (
    <RenderMockedComponent>
      <PokemonSpecsButtons id={id || '1'} />
    </RenderMockedComponent>
  );
};

describe('PokemonSpecsButton', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    cleanup();
  });

  it('Shoul render component successfully', () => {
    render(returnComponent());

    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByText(/anterior/i)).toBeInTheDocument();
    expect(screen.getByText(/voltar à/i)).toBeInTheDocument();
    expect(screen.getByText(/próximo/i)).toBeInTheDocument();
    expect(screen.getByTestId('ArrowBackIcon')).toBeInTheDocument();
    expect(screen.getByTestId('HomeIcon')).toBeInTheDocument();
    expect(screen.getByTestId('ArrowForwardIcon')).toBeInTheDocument();
  });

  it('When id is equal to one the previous button should be disabled and the others enabled', () => {
    render(returnComponent());

    expect(screen.getByText(/anterior/i)).toBeDisabled();
    expect(screen.getByText(/voltar à/i)).toBeEnabled();
    expect(screen.getByText(/próximo/i)).toBeEnabled();
  });

  it('When id is different of one all buttons should be enabled', () => {
    render(returnComponent('2'));

    expect(screen.getByText(/anterior/i)).toBeEnabled();
    expect(screen.getByText(/voltar à/i)).toBeEnabled();
    expect(screen.getByText(/próximo/i)).toBeEnabled();
  });

  it('when click on previous should call function', async () => {
    render(returnComponent('2'));

    await userEvent.click(screen.getByText(/anterior/i));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/1');
  });

  it('when click on go back should call function', async () => {
    render(returnComponent('2'));

    await userEvent.click(screen.getByText(/voltar à/i));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('when click on next should call function', async () => {
    render(returnComponent('2'));

    await userEvent.click(screen.getByText(/próximo/i));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/3');
  });
});
