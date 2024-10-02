import { LoaderWrapper } from '@/components/Loader/styles';
import { Bars } from 'react-loader-spinner';

interface IProps {
  isLoading: boolean;
}

function LoaderComponent({ isLoading }: IProps) {
  return (
    <LoaderWrapper>
      <Bars height="150" width="150" color="#E4E4E4" visible={isLoading} />
    </LoaderWrapper>
  );
}

export default LoaderComponent;
