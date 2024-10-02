import { FlexDiv, Header, HeaderItems } from '@/components/Header/styles';
import pokemon from '@/assets/img/pokemon.png';
import MenuComponent from '@/components/Menu';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import NavigationComponent from '@/components/Navigation';

function HeaderComponent() {
  const navigate = useNavigate();
  const { t } = useTranslation('flex');

  return (
    <Header>
      <HeaderItems>
        <FlexDiv>
          <img src={pokemon} alt="Pokemon" width="150" data-testid="logo" />

          <NavigationComponent t={t} navigate={navigate} />
        </FlexDiv>

        <MenuComponent />
      </HeaderItems>
    </Header>
  );
}

export default HeaderComponent;
