import HeaderComponent from '@/components/Header';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';
import { render, screen } from '@testing-library/react';

const returnComponent = () => {
  return (
    <RenderMockedComponent>
      <HeaderComponent />
    </RenderMockedComponent>
  );
};

describe('Header', () => {
  it('ensure header componenet renders successfully', () => {
    render(returnComponent());

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
