import InitialTransition from '@/components/InitialTransition';
import PokemonTypeComponent from '@/components/PokemonType';
import useFetchApi from '@/hooks/useFetch';
import { ListWrapper, Wrapper } from '@/pages/PokemonList/styles';
import { IGetPokemonTypes } from '@/services/types';

function PokemonTypesPage() {
  const url = '/type';
  const { data, isLoading } = useFetchApi<IGetPokemonTypes>({
    url,
    initialData: { count: 0, next: null, previous: null, results: [] },
  });

  return (
    <>
      {isLoading && <InitialTransition isLoading={isLoading} />}
      <Wrapper>
        <ListWrapper>
          {data.results.slice(0, 18).map((elem) => (
            <PokemonTypeComponent
              key={elem.name}
              type={elem.name}
              style={{ width: 'unset', height: 'unset' }}
            />
          ))}
        </ListWrapper>
      </Wrapper>
    </>
  );
}

export default PokemonTypesPage;
