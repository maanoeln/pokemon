import ButtonComponent from '@/components/Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';

interface IProps {
  primary?: boolean;
  children: string;
  padding?: boolean;
  onClick?(): void;
  handleGoBack?(): void;
}

const returnComponent = ({
  children,
  padding = false,
  primary = false,
  ...rest
}: IProps) => {
  return (
    <RenderMockedComponent>
      <ButtonComponent {...rest} primary={primary} padding={padding}>
        {children}
      </ButtonComponent>
    </RenderMockedComponent>
  );
};

describe('Button', () => {
  it('should render button correctly', () => {
    render(
      returnComponent({
        children: 'Botão',
      }),
    );

    expect(screen.getByText('Botão')).toBeInTheDocument();
  });

  it('when have onclick function should call it', async () => {
    const mockOnClick = jest.fn();

    render(
      returnComponent({
        children: 'Botão',
        onClick: mockOnClick,
      }),
    );

    const button = screen.getByText('Botão');
    await userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('when have handleGoBack function should call it', async () => {
    const mockHandleGoBack = jest.fn();

    render(
      returnComponent({
        children: 'Botão',
        handleGoBack: mockHandleGoBack,
      }),
    );

    const button = screen.getByRole('button');
    expect(button).toHaveStyleRule('background-color: transparent');

    await userEvent.click(button);
    expect(mockHandleGoBack).toHaveBeenCalled();
  });

  it('when prop primary passed should have another color', () => {
    render(
      returnComponent({
        children: 'Botão',
        primary: true,
        padding: true,
      }),
    );

    expect(screen.getByRole('button')).toHaveStyleRule(
      'background-color: rgba(195, 143, 255, 0.6)',
    );
  });
});
