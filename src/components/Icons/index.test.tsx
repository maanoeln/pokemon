import Icons from '@/components/Icons';
import { render, screen } from '@testing-library/react';

describe('Icons', () => {
  it('should render icons correctly', () => {
    render(<Icons name="Github" />);

    expect(screen.getByTestId('Github')).toBeInTheDocument();
  });

  it('should render icons with custom viewbox', () => {
    const { container } = render(<Icons name="Github" viewBox="0 0 24 24" />);

    const icon = container.querySelector('svg');

    expect(icon?.getAttribute('viewBox')).toBe('0 0 24 24');
  });
});
