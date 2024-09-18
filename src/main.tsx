import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/index.tsx';
import { ThemeProvider } from 'styled-components';
import { dark } from '@/css/dark';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={dark}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
