import Icons from '@/components/Icons';
import { screen } from '@testing-library/react';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';

describe('Icons', () => {
  it('should render icons correctly', () => {
    returnMockWithProviders(<Icons name="Github" />);

    expect(screen.getByTestId('Github')).toBeInTheDocument();
  });

  it('should render icons with custom viewbox', () => {
    const { container } = returnMockWithProviders(
      <Icons name="Github" viewBox="0 0 24 24" />,
    );

    const icon = container.querySelector('svg');

    expect(icon?.getAttribute('viewBox')).toBe('0 0 24 24');
  });
});
