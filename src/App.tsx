import FooterComponent from '@/components/Footer';
import HeaderComponent from '@/components/Header';
import WrapperComponent from '@/components/Wrapper';
import GlobalStyle from '@/globalStyles';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <WrapperComponent>
      <GlobalStyle />
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
      <ToastContainer theme={theme} position="bottom-right" autoClose={3000} />
    </WrapperComponent>
  );
}

export default App;
