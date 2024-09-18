import FooterComponent from '@/components/Footer';
import HeaderComponent from '@/components/Header';
import WrapperComponent from '@/components/Wrapper';
import GlobalStyle from '@/globalStyles';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <WrapperComponent>
      <GlobalStyle />
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </WrapperComponent>
  );
}

export default App;
