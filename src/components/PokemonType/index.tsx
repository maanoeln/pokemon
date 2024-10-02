import Icons from '@/components/Icons';
import { TypeCard, Text } from '@/components/PokemonType/styles';
import { useTranslation } from 'react-i18next';

interface IProps {
  type: string;
  style?: { width: string; height: string };
  isType?: boolean;
}

function PokemonTypeComponent({ type, style, isType }: IProps) {
  const { t } = useTranslation('pokemon_types');
  return (
    <TypeCard $type={type} style={style}>
      <Text $type={type}>{t(type)}</Text>
      <Icons
        name={type}
        width="80px"
        height="80px"
        color="#FFF"
        fillRule="evenodd"
        clipRule="evenodd"
        isType={isType}
      />
    </TypeCard>
  );
}

export default PokemonTypeComponent;
