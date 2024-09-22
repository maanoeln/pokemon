import FooterComponent from '@/components/Footer';
import HeaderComponent from '@/components/Header';
import WrapperComponent from '@/components/Wrapper';
import GlobalStyle from '@/globalStyles';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <WrapperComponent>
      <GlobalStyle />
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
      <ToastContainer />
    </WrapperComponent>
  );
}

export default App;
