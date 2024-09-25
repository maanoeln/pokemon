import PokemonTypeComponent from '@/components/PokemonType';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';
import { render, screen } from '@testing-library/react';

const returnComponent = () => {
  return (
    <RenderMockedComponent>
      <PokemonTypeComponent type="fire" />
    </RenderMockedComponent>
  );
};

describe('PokemonItem', () => {
  it('Should render component sucessfully', async () => {
    render(returnComponent());

    expect(screen.getByText('Fogo')).toBeInTheDocument();
    expect(screen.getByAltText('Fogo')).toBeInTheDocument();
  });
});
