import WrapperComponent from '@/components/Wrapper';
import GlobalStyle from '@/globalStyles';
import { RootState } from '@/store/store';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <WrapperComponent>
      <GlobalStyle />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <ScrollRestoration />
      <ToastContainer theme={theme} position="bottom-right" autoClose={3000} />
    </WrapperComponent>
  );
}

export default App;
