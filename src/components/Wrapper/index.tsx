import { PropsWithChildren } from 'react';
import { MainContainer, Wrapper } from './styles';
import HeaderComponent from '@/components/Header';
import FooterComponent from '@/components/Footer';

function WrapperComponent({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <HeaderComponent />
      <MainContainer>{children}</MainContainer>
      <FooterComponent />
    </Wrapper>
  );
}

export default WrapperComponent;
