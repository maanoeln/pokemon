import FooterComponent from './index.tsx';
import { screen } from '@testing-library/react';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore.tsx';

describe('Footer Componet', () => {
  it('Should render successfully with all icons', () => {
    const { container } = returnMockWithProviders(<FooterComponent />);

    expect(container.querySelectorAll('svg')).toHaveLength(3);
  });

  it('Should render successfully with developers name', () => {
    returnMockWithProviders(<FooterComponent />);

    expect(screen.getByText(/Manoel Neto/i)).toBeDefined();
    expect(screen.getByText(/Manoel Neto/i)).toBeInTheDocument();
  });
});
