import WrapperComponent from '@/components/Wrapper';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Wrapper Componente', () => {
  it('Should show 2 children when there is some', () => {
    const { container } = render(
      <WrapperComponent>
        <p>child 1</p>
        <p>child 2</p>
      </WrapperComponent>,
    );

    const wrapper = container.querySelector('div');

    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelector('div')).toBeInTheDocument();
    expect(wrapper?.childElementCount).toBe(2);
  });

  it('Should show 1 children when there is some', () => {
    const { container } = render(
      <WrapperComponent>
        <p>child 1</p>
      </WrapperComponent>,
    );

    const wrapper = container.querySelector('div');

    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelector('div')).toBeInTheDocument();
    expect(wrapper?.childElementCount).toBe(1);
  });

  it('Should not show any children', () => {
    const { container } = render(<WrapperComponent />);

    const wrapper = container.querySelector('div');

    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelector('div')).toBeInTheDocument();
    expect(wrapper?.childElementCount).toBe(0);
  });
});
