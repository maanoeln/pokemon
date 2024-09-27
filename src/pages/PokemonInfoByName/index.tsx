import Icons from '@/components/Icons';
import LoaderComponent from '@/components/Loader';
import PokemonSpecsButtons from '@/components/PokemonSpecsButton';
import PokemonSpecInfoComponent from '@/components/PokemonSpecsInfo';
import PokemonsSpecsComponent from '@/components/PokemonsSpecs';
import PokemonTypeComponent from '@/components/PokemonType';
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
  SpecsSubWrapper,
  SpecsWrapper,
  TitleWrapper,
  PokemonIdName,
} from '@/pages/PokemonInfoByName/styles';
import { IPokemonInfo } from '@/services/types';
import { AppDispatch, RootState } from '@/store/store';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function PokemonInfoByName() {
  const { id, name } = useParams<{ id: string; name: string }>();
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.favoritePokemons,
  );

  const dispatch = useDispatch<AppDispatch>();
  const url = `/pokemon/${id}`;
  const { t } = useTranslation('flex');

  const isFavorite = isPokemonFavorite(pokemons, +id!);

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

  const { height, weight, base_experience } = data;
  const basicInfoArray = [{ height }, { weight }, { base_experience }];

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
          width={400}
          height="500"
          z-index={1}
          data-testid={name}
        />
      </PokemonCard>

      <SpecsWrapper>
        <SpecsSubWrapper>
          <PokemonsSpecsComponent title={t('basic_info')}>
            {basicInfoArray.map((elem) => {
              const [key, value] = Object.entries(elem)[0];
              return (
                <PokemonSpecInfoComponent
                  name={t(key)}
                  key={key}
                  value={value}
                  iconName={key}
                />
              );
            })}
          </PokemonsSpecsComponent>

          <PokemonsSpecsComponent title={t('types')}>
            {data.types.map(({ slot, type }) => (
              <PokemonTypeComponent key={slot} type={type.name} />
            ))}
          </PokemonsSpecsComponent>

          <PokemonsSpecsComponent title={t('abilities')}>
            {data.abilities.map(({ ability }) => (
              <PokemonSpecInfo key={ability.name}>
                {t(ability.name)}
              </PokemonSpecInfo>
            ))}
          </PokemonsSpecsComponent>
        </SpecsSubWrapper>

        <PokemonSpecsButtons id={`${id}`} />
      </SpecsWrapper>
    </PokemonInfoWrapper>
  );
}

export default PokemonInfoByName;
