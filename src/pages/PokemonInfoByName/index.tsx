import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';
import { getPokemnonByName } from '@/services/api';
import { parseResponseData } from '@/services/response/parser';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PokemonInfoByName() {
  const [pokemonInfo, setPokemnonInfo] = useState({});
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    getPokemnonByName(name || '')
      .then((data) => parseResponseData(data))
      .then((data) => setPokemnonInfo(data))
      .catch((e) => console.warn(e));
  }, []);

  console.log(pokemonInfo);

  return (
    <div>
      <h1>{capitalizeFirstLetter(name || '')}</h1>
    </div>
  );
}

export default PokemonInfoByName;
