import PokemonItemComponent from '@/components/PokemonItem';
import {
  ListWrapper,
  NoDataContainer,
  Text,
  TitleWrapper,
  Wrapper,
} from '@/pages/Favorites/styles';
import { RootState } from '@/store/store';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function FavoritesPage() {
  const navigate = useNavigate();
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.favoritePokemons,
  );
  const { t } = useTranslation('flex');

  const handleClickOnPokemon = () => (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Text $primary>{t('favorites')}</Text>
        <Text>{t('favorite_message')}</Text>
      </TitleWrapper>
      <ListWrapper>
        {pokemons.length ? (
          pokemons.map(({ id, name }) => (
            <PokemonItemComponent
              id={id}
              name={name}
              onClick={handleClickOnPokemon()}
              key={name}
            />
          ))
        ) : (
          <NoDataContainer>
            <Text $primary>{t('no_favorites')}</Text>
          </NoDataContainer>
        )}
      </ListWrapper>
    </Wrapper>
  );
}

export default FavoritesPage;
