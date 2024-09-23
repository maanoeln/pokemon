import {
  FavoriteButton,
  Header,
  HeaderItems,
} from '@/components/Header/styles';
import pokemon from '@/assets/img/pokemon.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

function HeaderComponent() {
  const pokemons = useSelector((state: RootState) => state.pokemons);

  const favoriteNumbers: string =
    pokemons.length > 0 ? `(${pokemons.length})` : '';

  return (
    <Header>
      <HeaderItems>
        <img src={pokemon} alt="Pokemon" width="150" data-testid="logo" />

        <FavoriteButton disabled={!pokemons.length}>
          Favoritos {favoriteNumbers}
        </FavoriteButton>
      </HeaderItems>
    </Header>
  );
}

export default HeaderComponent;
