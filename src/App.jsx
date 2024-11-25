import { useState } from 'react'

import './App.css'

import List from './List'
import Pokemon from './Pokemon'

function App() {
  const [count, setCount] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const selectPokemon = (pokemonName) =>{
    setSelectedPokemon(pokemonName);
}

  return (
    <>
      <div className="flex h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className='flex flex-1  items-center justify-center'>
          <List onSelectPokemon={selectPokemon} />
        </div>
        <div className='flex flex-1  items-center justify-center'>
          <Pokemon selectedPokemon={selectedPokemon} />
        </div>
      </div>
    </>

  )
}

export default App
