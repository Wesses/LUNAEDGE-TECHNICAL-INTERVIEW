import React, { useEffect, useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { getAllPokemons } from '../../api/api';
import { Pokemon } from '../../types/Pokemon';

type Props = {
  placeholder: string;
  text: String;
};

export const Autocomplete: React.FC<Props> = ({placeholder, text}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getAllPokemons().then(res => {
      setPokemons(res.results);
    });
  }, []);
  
  console.log(pokemons);

  return (
    <label className="flex flex-col max-w-64 gap-y-2">
      <div className="flex gap-x-1">
        {text}

        <InformationCircleIcon className="w-6 h-6 text-[#000]" />
      </div>
      <input
        className="rounded-lg py-3 px-4 outline outline-2 outline-[#a5a8a8] hover:outline-[#000] focus:outline-[#000]"
        type="text"
        placeholder={placeholder}
      />

    </label>
  )
}
