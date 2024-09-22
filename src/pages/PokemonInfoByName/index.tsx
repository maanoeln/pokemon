import ButtonComponent from '@/components/Button';
import Icons from '@/components/Icons';
import LoaderComponent from '@/components/Loader';
import { ButtonContainer } from '@/components/PokemonItem/styles';
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';
import { isPokemonFavorite } from '@/helpers/getFavoritesPokemos';
import { handleFavorites } from '@/helpers/handleFavoritePokemons';
import { returnFavoriteIconConfigs } from '@/helpers/returnFavoriteIconConfigs';
import { formattedPokemnonId } from '@/helpers/returnFormattedPokemId';
import useFetchApi from '@/hooks/useFetch';
import {
  PokemonCard,
  PokemonInfoWrapper,
  PokemonSpecInfo,
  PokemonSpecs,
  PokemonSpecTitle,
  SpecsSubWrapper,
  SpecsWrapper,
  TitleWrapper,
  PokemonIdName,
} from '@/pages/PokemonInfoByName/styles';
import { IPokemonInfo } from '@/services/types';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function PokemonInfoByName() {
  const { id, name } = useParams<{ id: string; name: string }>();
  const { pokemons } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const url = `/pokemon/${name}`;
  const navigate = useNavigate();

  const isFavorite = isPokemonFavorite(pokemons, +id!);

  const handleGoBack = () => {
    navigate(-1);
  };

  const { isLoading, data } = useFetchApi<IPokemonInfo>({
    initialData: {
      height: 0,
      weight: 0,
      base_experience: 0,
      types: [],
      abilities: [],
    },
    url,
  });

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <PokemonInfoWrapper>
      <PokemonCard>
        <TitleWrapper>
          <PokemonIdName>
            #{formattedPokemnonId(id || '')} {capitalizeFirstLetter(name || '')}
          </PokemonIdName>

          <Icons
            {...returnFavoriteIconConfigs(isFavorite)}
            width="25px"
            height="25px"
            onClick={() =>
              handleFavorites(+id!, `${name}`, isFavorite, dispatch)
            }
          />
        </TitleWrapper>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={name}
          height="500"
          z-index={1}
          data-testid={name}
        />
      </PokemonCard>

      <SpecsWrapper>
        <SpecsSubWrapper>
          <PokemonSpecs>
            <PokemonSpecTitle>Informações básicas</PokemonSpecTitle>
            <PokemonSpecInfo>Altura: {data.height}</PokemonSpecInfo>
            <PokemonSpecInfo>Peso: {data.weight}</PokemonSpecInfo>
            <PokemonSpecInfo>
              Experiência: {data.base_experience}
            </PokemonSpecInfo>
          </PokemonSpecs>

          <PokemonSpecs>
            <PokemonSpecTitle>Tipos</PokemonSpecTitle>
            {data.types.map(({ slot, type }) => (
              <PokemonSpecInfo key={slot}>
                {slot} - {type.name}
              </PokemonSpecInfo>
            ))}
          </PokemonSpecs>

          <PokemonSpecs>
            <PokemonSpecTitle>Habilidades</PokemonSpecTitle>
            {data.abilities.map(({ ability }) => (
              <PokemonSpecInfo key={ability.name}>
                {ability.name}
              </PokemonSpecInfo>
            ))}
          </PokemonSpecs>
        </SpecsSubWrapper>

        <ButtonContainer>
          <ButtonComponent padding handleGoBack={() => handleGoBack()}>
            Voltar
          </ButtonComponent>
          <ButtonComponent padding primary onClick={() => {}}>
            Voltar
          </ButtonComponent>
        </ButtonContainer>
      </SpecsWrapper>
    </PokemonInfoWrapper>
  );
}

export default PokemonInfoByName;
