import { ReactNode } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import brasil from '@/assets/img/brazil.png';
import usa from '@/assets/img/usa.png';
import i18next from 'i18next';
import { AppDispatch } from '@/store/store';
import { changeTheme } from '@/store/themeSlice';

export const MENU_ITEMS = (dispatch: AppDispatch): IMenuItems[] => [
  {
    title: 'languages',
    items: [
      {
        name: 'pt_BR',
        icon: <img src={brasil} width="20px" alt="Brasil" />,
      },
      { name: 'en_US', icon: <img src={usa} width="20px" alt="USA" /> },
    ],
    fn: (value: string) => i18next.changeLanguage(value),
  },
  {
    title: 'theme',
    items: [
      { name: 'light', icon: <LightMode sx={{ fontSize: '20px' }} /> },
      { name: 'dark', icon: <DarkMode sx={{ fontSize: '20px' }} /> },
    ],
    fn: (theme: string) => dispatch(changeTheme(theme)),
  },
];

interface IItems {
  name: string;
  icon: ReactNode;
}

interface IMenuItems {
  title: string;
  items: IItems[];
  fn(value: string): void;
}
