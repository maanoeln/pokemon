import { LoaderWrapper } from '@/components/Loader/styles';
import { Bars } from 'react-loader-spinner';

function LoaderComponent() {
  return (
    <LoaderWrapper>
      <Bars height="60" width="60" color="#E4E4E4" visible={true} />
    </LoaderWrapper>
  );
}

export default LoaderComponent;
