import LoaderComponent from '@/components/Loader';
import { screen } from '@testing-library/react';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';

describe('Loader', () => {
  it('loader component renders successfully', () => {
    returnMockWithProviders(<LoaderComponent isLoading />);

    expect(screen.getByTestId('bars-loading')).toBeInTheDocument();
  });
});
