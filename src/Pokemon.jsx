import {useEffect, useState} from 'react'
import axios from 'axios';
import TYPE_COLORS from './utils';


const Pokemon = ({selectedPokemon}) => {

    const [newPokemon, setNewPokemon] = useState(null)

    useEffect(() =>{
        if (selectedPokemon){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then(response => setNewPokemon(response.data))
        .catch(error => console.error('Axios error:', error));
        }
    },[selectedPokemon])


  return (
    <div className='w-2/4 h-[60vh] flex flex-col items-center justify-start'>
        {newPokemon ? (
        <>
            <h1 className="text-white font-new-amsterdam text-3xl mb-5">{newPokemon.name}</h1>
            <img src={newPokemon.sprites.front_default} alt={newPokemon.name}/>
            {newPokemon.types ? (
                <div className='flex my-2'>
             {newPokemon.types.map((ability)=> (
                <span className='rounded p-1 mx-1 text-white font-new-amsterdam' style={{backgroundColor:TYPE_COLORS[ability.type.name]}}>{ability.type.name}</span>
             ))}
            </div>
            ):(
                null
            )}
            <h6 className='text-white font-new-amsterdam text-xl'>Weight {newPokemon.weight}</h6>
            <h6 className='text-white font-new-amsterdam text-xl'>Height  {newPokemon.height}</h6>
        </>
        ) : (
          <p className="text-white">Loading...</p> 
        )}
    </div>
  )
}

export default Pokemon