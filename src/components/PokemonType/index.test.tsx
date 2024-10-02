import PokemonTypeComponent from '@/components/PokemonType';
import { screen } from '@testing-library/react';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';

describe('PokemonItem', () => {
  it('Should render component sucessfully', async () => {
    returnMockWithProviders(<PokemonTypeComponent type="fire" />);

    expect(screen.getByText('Fire')).toBeInTheDocument();
    expect(screen.getByTestId('fire')).toBeInTheDocument();
  });
});
