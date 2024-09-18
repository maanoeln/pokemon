import {
  FavoriteButton,
  Header,
  HeaderItems,
} from '@/components/Header/styles';
import Pokemon from '@/assets/img/pokemon.png';

function HeaderComponent() {
  return (
    <Header>
      <HeaderItems>
        <img src={Pokemon} alt="Pokemon" width="150" />

        <FavoriteButton>Favoritos</FavoriteButton>
      </HeaderItems>
    </Header>
  );
}

export default HeaderComponent;
