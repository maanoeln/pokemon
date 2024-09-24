import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/index.tsx';
import { ThemeProvider } from 'styled-components';
import { dark } from '@/css/dark';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/locales/i18next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={dark}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  </StrictMode>,
);
