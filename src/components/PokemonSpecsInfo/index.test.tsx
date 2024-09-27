import PokemonSpecInfoComponent from '@/components/PokemonSpecsInfo';
import { render, screen } from '@testing-library/react';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';

const renderComponent = (iconName?: string) => (
  <RenderMockedComponent>
    <PokemonSpecInfoComponent
      name="altura"
      value="1,50m"
      iconName={iconName || undefined}
    />
  </RenderMockedComponent>
);

describe('PokemonSpecInfoComponent', () => {
  it('Should render component correctly', () => {
    render(renderComponent('height'));

    expect(screen.getByText('altura')).toBeInTheDocument();
    expect(screen.getByText('1,50m')).toBeInTheDocument();
    expect(screen.getByTestId('height')).toBeInTheDocument();
  });

  it('when icon name is not passes it should not render the svg', () => {
    render(renderComponent());

    expect(screen.getByText('altura')).toBeInTheDocument();
    expect(screen.getByText('1,50m')).toBeInTheDocument();
    expect(screen.queryByRole('svg')).not.toBeInTheDocument();
  });
});
