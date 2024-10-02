import HeaderComponent from '@/components/Header';
import { returnMockWithProviders } from '../../../mocks/createComponentWithStore';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockNavigate } from '@/setupTests';

describe('Header', () => {
  it('ensure header componenet renders successfully and does not have a favorite pokemon', async () => {
    returnMockWithProviders(<HeaderComponent />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('SettingsIcon')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(4);
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeEnabled();
  });

  it('ensure when user click on settings it opens the menu', async () => {
    returnMockWithProviders(<HeaderComponent />);

    const settings = screen.getByText('Settings');
    await userEvent.click(settings);

    await waitFor(async () => {
      expect(screen.getByText('Languages')).toBeInTheDocument();
      expect(screen.getByText('Portuguese')).toBeInTheDocument();
      expect(screen.getByText('English')).toBeInTheDocument();
      expect(screen.getByText('Theme')).toBeInTheDocument();
      expect(screen.getByText('Dark')).toBeInTheDocument();
      expect(screen.getByText('Light')).toBeInTheDocument();
      expect(screen.getByAltText('USA')).toBeInTheDocument();
      expect(screen.getByAltText('Brasil')).toBeInTheDocument();
      expect(screen.getByTestId('LightModeIcon')).toBeInTheDocument();
      expect(screen.getByTestId('DarkModeIcon')).toBeInTheDocument();
    });
  });

  it('user should be able to change theme', async () => {
    returnMockWithProviders(<HeaderComponent />);
    const settings = screen.getByText('Settings');
    await userEvent.click(settings);

    await waitFor(async () => {
      expect(screen.getByText('Light')).toBeInTheDocument();
    });

    const theme = screen.getByText('Light');
    await userEvent.click(theme);
  });

  it('when user click on menu item should call function', async () => {
    returnMockWithProviders(<HeaderComponent />);
    const home = screen.getByText('Home');
    await userEvent.click(home);

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('');
  });

  it('user should be able to change language', async () => {
    returnMockWithProviders(<HeaderComponent />);

    const settings = screen.getByText('Settings');
    await userEvent.click(settings);

    await waitFor(async () => {
      expect(screen.getByText('Languages')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText('Portuguese'));
    expect(screen.queryByText('Languages')).not.toBeInTheDocument();
    expect(screen.getByText('Idiomas')).toBeInTheDocument();
  });
});
