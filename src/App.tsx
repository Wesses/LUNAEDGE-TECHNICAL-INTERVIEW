import { useState } from 'react';
import { LabelInput } from './components/LabelInput';
import { Autocomplete } from './components/Autocomplete';

function App() {
  return (
    <div className="mx-24 my-3 font-inter">
      <h1 className="text-4xl font-pockem row-start-1 col-span-full font-pockem pb-6">
        Lunaedge technical interview
      </h1>

      <form className="flex flex-col gap-y-4">

        <LabelInput text="First name" placeholder="Enter your first name" />

        <LabelInput text="Last name" placeholder="Enter your last name" />

        <Autocomplete text="Select your pokemons" placeholder="Enter enter pokemon name" />

        <button type="button" className="w-10 h-5">

        </button>
      </form>
    </div>
  )
}

export default App
