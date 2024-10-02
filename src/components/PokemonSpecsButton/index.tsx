import { ButtonsContainer } from '@/components/PokemonSpecsButton/style';
import { ArrowBack, ArrowForward, Home } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface IProps {
  id: string;
}

function PokemonSpecsButtons({ id }: IProps) {
  const navigate = useNavigate();
  const { t } = useTranslation('flex');
  const isButtonDisabled = !!id && +id === 1;

  const handleNavigate = (id?: string) => {
    const url = id ? `/${id}` : `/`;
    navigate(url);
  };

  return (
    <ButtonsContainer>
      <Button
        startIcon={<ArrowBack />}
        variant="contained"
        size="medium"
        onClick={() => handleNavigate(`${+id! - 1}`)}
        disabled={isButtonDisabled}
      >
        {t('previous')}
      </Button>

      <Button
        startIcon={<Home />}
        variant="outlined"
        size="medium"
        onClick={() => handleNavigate()}
        color="secondary"
      >
        {t('go_back_homepage')}
      </Button>

      <Button
        endIcon={<ArrowForward />}
        variant="contained"
        size="medium"
        onClick={() => handleNavigate(`${+id! + 1}`)}
      >
        {t('next')}
      </Button>
    </ButtonsContainer>
  );
}

export default PokemonSpecsButtons;
