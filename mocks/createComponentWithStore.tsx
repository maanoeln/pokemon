import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/locales/i18next';
import ThemeProvider from '@/theme/ThemeProvider';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/router';
import { AppStore, RootStore, setupStore } from '@/store/store';
import { render } from '@testing-library/react';

interface IProps {
  preloadedState?: Partial<RootStore>;
  store?: AppStore;
}

const routerMock = createMemoryRouter(routes, {
  basename: '/pokemons',
  initialEntries: [
    '/pokemons',
    '/pokemons/1',
    '/pokemons/types',
    '/pokemos/favorites',
  ],
  initialIndex: 0,
});

export function returnMockWithProviders(
  ui?: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: IProps = {},
) {
  function Wrapper({ children }: { children?: ReactNode }): JSX.Element {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <ThemeProvider>
            {children ? children : <RouterProvider router={routerMock} />}
          </ThemeProvider>
        </I18nextProvider>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
