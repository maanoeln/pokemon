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
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.favoritePokemons,
  );
  const { t } = useTranslation('flex');

  return (
    <Header>
      <HeaderItems>
        <img src={pokemon} alt="Pokemon" width="150" data-testid="logo" />

        <FlexDiv>
          {!!pokemons.length && (
            <Badge
              color="primary"
              badgeContent={pokemons.length}
              data-testid="badge"
            >
              <FavoriteButton>
                {t('favorites', { count: pokemons.length })}
              </FavoriteButton>
            </Badge>
          )}

          <MenuComponent />
        </FlexDiv>
      </HeaderItems>
    </Header>
  );
}

export default HeaderComponent;
