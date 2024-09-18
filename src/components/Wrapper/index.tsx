import { PropsWithChildren } from 'react';
import { Wrapper } from './styles';

function WrapperComponent({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

export default WrapperComponent;
