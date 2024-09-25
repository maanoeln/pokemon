import { Image, TypeCard, Text } from '@/components/PokemonType/styles';
import { useTranslation } from 'react-i18next';

interface IProps {
  type: string;
}

function PokemonTypeComponent({ type }: IProps) {
  const { t } = useTranslation('pokemon_types');
  return (
    <TypeCard $type={type}>
      <Text $type={type}>{t(type)}</Text>
      <Image
        src="https://pokemoncalc.web.app/en/assets/pokeball.svg"
        alt={t(type)}
      />
    </TypeCard>
  );
}

export default PokemonTypeComponent;
