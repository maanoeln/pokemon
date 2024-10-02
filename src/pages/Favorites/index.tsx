import PokemonItemComponent from '@/components/PokemonItem';
import {
  ListWrapper,
  NoDataContainer,
  Text,
  TitleWrapper,
  Wrapper,
} from '@/pages/Favorites/styles';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function FavoritesPage() {
  const navigate = useNavigate();
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.favoritePokemons,
  );

  const handleClickOnPokemon = () => (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Text $primary>Favoritos</Text>
        <Text>Você pode favoritar no máximo 10 pokemons</Text>
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
            <Text $primary>Você ainda não favoritou nenhum pokemon</Text>
          </NoDataContainer>
        )}
      </ListWrapper>
    </Wrapper>
  );
}

export default FavoritesPage;
