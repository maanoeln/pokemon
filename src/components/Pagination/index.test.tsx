import { cleanup, render, screen } from '@testing-library/react';
import RenderMockedComponent from '../../../mocks/createComponentWithStore';
import userEvent from '@testing-library/user-event';
import PaginationComponent from '@/components/Pagination';

const mockHandleChange = jest.fn();

const returnComponent = (page?: number, numberOfPages?: number) => {
  return (
    <RenderMockedComponent>
      <PaginationComponent
        numberOfPages={numberOfPages || 5}
        page={page || 1}
        handleChange={mockHandleChange}
      />
    </RenderMockedComponent>
  );
};

describe('Pagination', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    cleanup();
  });

  it('Shoul render component successfully', () => {
    render(returnComponent());

    expect(screen.getAllByRole('listitem')).toHaveLength(9);
    expect(screen.getByTestId('FirstPageIcon')).toBeInTheDocument();
    expect(screen.getByTestId('NavigateBeforeIcon')).toBeInTheDocument();
    expect(screen.getByTestId('NavigateNextIcon')).toBeInTheDocument();
    expect(screen.getByTestId('LastPageIcon')).toBeInTheDocument();
  });

  it('When is on page one the two previous icons should be disabled and the last two should be enabled and number one checked', () => {
    render(returnComponent());

    expect(screen.getByText('1')).toHaveAttribute('aria-current', 'true');
    expect(screen.getByText('2')).not.toHaveAttribute('aria-current');
    expect(screen.getByLabelText('Go to first page')).toBeDisabled();
    expect(screen.getByLabelText('Go to previous page')).toBeDisabled();
    expect(screen.getByLabelText('Go to next page')).toBeEnabled();
    expect(screen.getByLabelText('Go to last page')).toBeEnabled();
  });

  it('When is on last page the two last icons should be disabled and the first two should be enabled and number 5 checked', () => {
    render(returnComponent(5));

    expect(screen.getByText('5')).toHaveAttribute('aria-current', 'true');
    expect(screen.getByText('4')).not.toHaveAttribute('aria-current');
    expect(screen.getByLabelText('Go to first page')).toBeEnabled();
    expect(screen.getByLabelText('Go to previous page')).toBeEnabled();
    expect(screen.getByLabelText('Go to next page')).toBeDisabled();
    expect(screen.getByLabelText('Go to last page')).toBeDisabled();
  });

  it('When it has more than or equal to 10 pages 3dots should appear', () => {
    render(returnComponent(5, 10));

    expect(screen.getByText('5')).toHaveAttribute('aria-current', 'true');
    expect(screen.getAllByText('…')).toHaveLength(2);
    expect(screen.getByLabelText('Go to first page')).toBeEnabled();
    expect(screen.getByLabelText('Go to previous page')).toBeEnabled();
    expect(screen.getByLabelText('Go to next page')).toBeEnabled();
    expect(screen.getByLabelText('Go to last page')).toBeEnabled();
  });

  it('When there is only one page all buttons should be disabled', () => {
    render(returnComponent(1, 1));

    expect(screen.getByText('1')).toHaveAttribute('aria-current', 'true');
    expect(screen.getByLabelText('Go to first page')).toBeDisabled();
    expect(screen.getByLabelText('Go to previous page')).toBeDisabled();
    expect(screen.getByLabelText('Go to next page')).toBeDisabled();
    expect(screen.getByLabelText('Go to last page')).toBeDisabled();
  });

  it('User should be able to change the page', async () => {
    const { rerender } = render(returnComponent(1, 4));

    expect(screen.getByText('1')).toHaveAttribute('aria-current', 'true');
    await userEvent.click(screen.getByText('2'));

    expect(mockHandleChange).toHaveBeenCalled();
    expect(mockHandleChange).toHaveBeenCalledTimes(1);

    rerender(returnComponent(2, 4));

    expect(screen.getByText('1')).not.toHaveAttribute('aria-current', 'true');
    expect(screen.getByText('2')).toHaveAttribute('aria-current', 'true');
  });
});
