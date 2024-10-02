import InitialTransition from '@/components/InitialTransition';
import PokemonTypeComponent from '@/components/PokemonType';
import useFetchApi from '@/hooks/useFetch';
import { ListWrapper, Wrapper } from '@/pages/PokemonList/styles';
import { IGetPokemonList } from '@/services/types';

function PokemonTypesPage() {
  const url = 'type';
  const { data, isLoading } = useFetchApi<IGetPokemonList>({
    initialData: { count: 0, next: null, previous: null, results: [] },
    url,
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
              isType
            />
          ))}
        </ListWrapper>
      </Wrapper>
    </>
  );
}

export default PokemonTypesPage;
