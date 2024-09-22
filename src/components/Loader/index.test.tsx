import LoaderComponent from '@/components/Loader';
import { render, screen } from '@testing-library/react';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';

const returnComponent = () => {
  return (
    <RenderMockedComponent>
      <LoaderComponent />
    </RenderMockedComponent>
  );
};
describe('Loader', () => {
  it('loader component renders successfully', () => {
    render(returnComponent());

    expect(screen.getByTestId('bars-loading')).toBeInTheDocument();
  });
});
