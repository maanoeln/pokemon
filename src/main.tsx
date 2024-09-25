import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/index.tsx';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/locales/i18next';
import ThemeProvider from '@/theme/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  </StrictMode>,
);
