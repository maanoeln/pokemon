import {
  Button,
  ButtonContainer,
  PokemonCard,
  PokemonId,
  PokemonName,
} from '@/components/PokemonItem/styles';
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';
import { formattedPokemnonId } from '@/helpers/returnFormattedPokemId';

interface IProps {
  id: number;
  name: string;
  onClick(value: string): void;
}

function PokemonItemComponent({ id, name, onClick }: IProps) {
  return (
    <PokemonCard>
      <PokemonId>{`#${formattedPokemnonId(id.toString())}`}</PokemonId>
      <img
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={name}
        height="100"
        z-index={1}
      />
      <PokemonName>{capitalizeFirstLetter(name)}</PokemonName>

      <ButtonContainer>
        <Button>Favoritar</Button>
        <Button primary onClick={() => onClick(name)}>
          + Detalhes
        </Button>
      </ButtonContainer>
    </PokemonCard>
  );
}

export default PokemonItemComponent;
