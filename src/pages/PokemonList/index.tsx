import LoaderComponent from '@/components/Loader';
import PaginationComponent from '@/components/Pagination';
import PokemonItemComponent from '@/components/PokemonItem';
import useFetchApi from '@/hooks/useFetch';
import { ListWrapper, Wrapper } from '@/pages/PokemonList/styles';
import { IGetPokemonList } from '@/services/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PokemonListPage() {
  const [offset, setOffset] = useState<string>('0');
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useFetchApi<IGetPokemonList>({
    initialData: { count: 0, next: null, previous: null, results: [] },
    params: {
      offset,
      limit: '20',
    },
  });

  const [page, setPage] = useState<number>(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setOffset(((value - 1) * 20 + 1).toString());
    refetch();
  };

  const handleClickOnPokemon = () => (id: number) => {
    navigate(`pokemon/${id}`);
  };

  function getNumberFromUrl(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 2];
  }

  const numberOfPages: number = data.count ? Math.ceil(data.count / 20) : 0;

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <Wrapper>
      <ListWrapper>
        {data.results.map((pokemon) => (
          <PokemonItemComponent
            key={pokemon.name}
            name={pokemon.name}
            id={getNumberFromUrl(pokemon.url)}
            onClick={handleClickOnPokemon()}
          />
        ))}
        <PaginationComponent
          numberOfPages={numberOfPages}
          page={page}
          handleChange={handleChange}
        />
      </ListWrapper>
    </Wrapper>
  );
}

export default PokemonListPage;
