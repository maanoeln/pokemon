import {
  PokemonSpecs,
  PokemonSpecWrapper,
  PokemonSpecTitle,
} from '@/components/PokemonsSpecs/styles';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  title: string;
}

function PokemonsSpecsComponent({ title, children }: IProps) {
  return (
    <PokemonSpecs>
      <PokemonSpecTitle>{title}</PokemonSpecTitle>

      <PokemonSpecWrapper>{children}</PokemonSpecWrapper>
    </PokemonSpecs>
  );
}

export default PokemonsSpecsComponent;
