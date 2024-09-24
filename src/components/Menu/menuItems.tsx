import { ReactNode } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import brasil from '@/assets/img/brazil.png';
import usa from '@/assets/img/usa.png';

export const MENU_ITEMS: IMenuItems[] = [
  {
    title: 'languages',
    items: [
      {
        name: 'pt_BR',
        icon: <img src={brasil} width="20px" alt="Brasil" />,
      },
      { name: 'en_US', icon: <img src={usa} width="20px" alt="USA" /> },
    ],
  },
  {
    title: 'theme',
    items: [
      { name: 'light', icon: <LightMode sx={{ fontSize: '20px' }} /> },
      { name: 'dark', icon: <DarkMode sx={{ fontSize: '20px' }} /> },
    ],
  },
];

interface IItems {
  name: string;
  icon: ReactNode;
}

interface IMenuItems {
  title: string;
  items: IItems[];
}
