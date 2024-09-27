import Icons from '@/components/Icons';
import { PokemonSpecInfo } from '@/components/PokemonSpecsInfo/styles';

interface IProps {
  name?: string;
  value: string;
  iconName?: string;
}

function PokemonSpecInfoComponent({ name, value, iconName }: IProps) {
  return (
    <PokemonSpecInfo>
      <div>{name}</div>
      {iconName && (
        <Icons name={iconName} width="20px" height="20px" viewBox="0 0 24 24" />
      )}
      {value}
    </PokemonSpecInfo>
  );
}

export default PokemonSpecInfoComponent;
