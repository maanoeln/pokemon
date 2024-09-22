import ButtonComponent from '@/components/Button';
import Icons from '@/components/Icons';
import {
  ButtonContainer,
  PokemonCard,
  PokemonId,
  PokemonName,
} from '@/components/PokemonItem/styles';
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';
import { isPokemonFavorite } from '@/helpers/getFavoritesPokemos';
import { handleFavorites } from '@/helpers/handleFavoritePokemons';
import { returnFavoriteIconConfigs } from '@/helpers/returnFavoriteIconConfigs';
import { formattedPokemnonId } from '@/helpers/returnFormattedPokemId';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
  id: number;
  name: string;
  onClick(id: number, name: string): void;
}

function PokemonItemComponent({ id, name, onClick }: IProps) {
  const pokemons = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch<AppDispatch>();

  const isFavorite = isPokemonFavorite(pokemons, id);

  return (
    <PokemonCard>
      <PokemonId>
        {`#${formattedPokemnonId(id.toString())}`}{' '}
        <Icons
          {...returnFavoriteIconConfigs(isFavorite)}
          width="25px"
          height="25px"
          onClick={() => handleFavorites(+id!, `${name}`, isFavorite, dispatch)}
        />
      </PokemonId>
      <img
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={name}
        height="100"
        z-index={1}
        data-testid={name}
      />
      <PokemonName>{capitalizeFirstLetter(name)}</PokemonName>

      <ButtonContainer>
        <ButtonComponent primary onClick={() => onClick(id, name)}>
          + Detalhes
        </ButtonComponent>
      </ButtonContainer>
    </PokemonCard>
  );
}

export default PokemonItemComponent;
