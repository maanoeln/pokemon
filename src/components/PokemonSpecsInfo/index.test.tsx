import PokemonSpecInfoComponent from '@/components/PokemonSpecsInfo';
import { screen } from '@testing-library/react';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';

describe('PokemonSpecInfoComponent', () => {
  it('Should render component correctly', () => {
    returnMockWithProviders(
      <PokemonSpecInfoComponent
        name="altura"
        value="1,50m"
        iconName={'height'}
      />,
    );

    expect(screen.getByText('altura')).toBeInTheDocument();
    expect(screen.getByText('1,50m')).toBeInTheDocument();
    expect(screen.getByTestId(/height/i)).toBeInTheDocument();
  });

  it('when icon name is not passes it should not render the svg', () => {
    returnMockWithProviders(
      <PokemonSpecInfoComponent name="altura" value="1,50m" />,
    );

    expect(screen.getByText('altura')).toBeInTheDocument();
    expect(screen.getByText('1,50m')).toBeInTheDocument();
    expect(screen.queryByRole('svg')).not.toBeInTheDocument();
  });
});
