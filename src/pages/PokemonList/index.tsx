import PokemonItemComponent from '@/components/PokemonItem';
import { ListWrapper } from '@/pages/PokemonList/styles';
import { getPokemons } from '@/services/api';
import { parseResponseData } from '@/services/response/parser';
import { IPokemonItem } from '@/services/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState<IPokemonItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons().then((data) =>
      setPokemonList(parseResponseData(data).results),
    );
  }, []);

  const handleClickOnPokemon = (name: string) => {
    navigate(`pokemon/${name}`);
  };

  return (
    <ListWrapper>
      {pokemonList.map((pokemon, idx) => (
        <PokemonItemComponent
          name={pokemon.name}
          id={idx + 1}
          onClick={handleClickOnPokemon}
        />
      ))}
    </ListWrapper>
  );
}

export default PokemonListPage;
