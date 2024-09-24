import LoaderComponent from '@/components/Loader';
import PokemonItemComponent from '@/components/PokemonItem';
import useFetchApi from '@/hooks/useFetch';
import { ListWrapper, Wrapper } from '@/pages/PokemonList/styles';
import { IGetPokemonList } from '@/services/types';
import { useNavigate } from 'react-router-dom';

function PokemonListPage() {
  const navigate = useNavigate();
  const { data, isLoading } = useFetchApi<IGetPokemonList>({
    initialData: { count: 0, next: null, previous: null, results: [] },
    params: {
      offset: '0',
      limit: '20',
    },
  });

  const handleClickOnPokemon = () => (id: number, name: string) => {
    navigate(`pokemon/${id}/${name}`);
  };

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <Wrapper>
      <ListWrapper>
        {data.results.map((pokemon, idx) => (
          <PokemonItemComponent
            key={pokemon.name}
            name={pokemon.name}
            id={idx + 1}
            onClick={handleClickOnPokemon()}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  );
}

export default PokemonListPage;
