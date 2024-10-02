import { FlexDiv } from '@/components/Header/styles';
import { Button } from '@mui/material';
import { TFunction } from 'i18next';
import { NavigateFunction } from 'react-router-dom';

const NAV_ITENS = [
  {
    title: 'home',
    path: '',
  },
  {
    title: 'types',
    path: 'types',
  },
  {
    title: 'favorites',
    path: 'favorites',
  },
];

interface IProps {
  t: TFunction;
  navigate: NavigateFunction;
}
function NavigationComponent({ t, navigate }: IProps) {
  return (
    <FlexDiv>
      {NAV_ITENS.map(({ title, path }) => (
        <Button
          key={title}
          variant="text"
          size="medium"
          onClick={() => navigate(path)}
          sx={{
            fontSize: '1.5rem',
            '&.MuiButtonBase-root:hover': {
              bgcolor: 'transparent',
            },
          }}
        >
          {t(title)}
        </Button>
      ))}
    </FlexDiv>
  );
}

export default NavigationComponent;
