import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes';
import { PropsWithChildren } from 'react';
import { RootState } from '@/store/store';

const Theme = ({ children }: PropsWithChildren) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
