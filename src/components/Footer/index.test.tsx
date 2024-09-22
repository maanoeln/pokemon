import { dark } from '@/css/dark.ts';
import FooterComponent from './index.tsx';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const mockWithTheme = () => {
  return (
    <ThemeProvider theme={dark}>
      <FooterComponent />
    </ThemeProvider>
  );
};
describe('Footer Componet', () => {
  it('Should render successfully with all icons', () => {
    const { container } = render(mockWithTheme());

    expect(container.querySelectorAll('svg')).toHaveLength(3);
  });

  it('Should render successfully with developers name', () => {
    render(mockWithTheme());

    expect(screen.getByText(/Manoel Neto/i)).toBeDefined();
    expect(screen.getByText(/Manoel Neto/i)).toBeInTheDocument();
  });
});
