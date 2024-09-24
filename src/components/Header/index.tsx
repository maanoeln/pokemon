import {
  FavoriteButton,
  FlexDiv,
  Header,
  HeaderItems,
} from '@/components/Header/styles';
import pokemon from '@/assets/img/pokemon.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Badge } from '@mui/material';
import MenuComponent from '@/components/Menu';
import { useTranslation } from 'react-i18next';

function HeaderComponent() {
  const pokemons = useSelector((state: RootState) => state.pokemons);
  const { t } = useTranslation('flex');
  return (
    <Header>
      <HeaderItems>
        <img src={pokemon} alt="Pokemon" width="150" data-testid="logo" />

        <FlexDiv>
          <Badge
            color="primary"
            badgeContent={pokemons.length}
            invisible={!pokemons.length}
            data-testid="badge"
          >
            <FavoriteButton disabled={!pokemons.length}>
              {t('favorites')}
            </FavoriteButton>
          </Badge>

          <MenuComponent />
        </FlexDiv>
      </HeaderItems>
    </Header>
  );
}

export default HeaderComponent;
