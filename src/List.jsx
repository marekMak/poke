import {useState, useEffect} from 'react'
import axios from 'axios';

const List = ({onSelectPokemon}) => {

    const [pokemons, setPokemons] = useState([])


    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => setPokemons(response.data.results))
        .catch(error => console.error('Axios error:', error));
    },[]);

   

  return (
    <div className='flex flex-col px-10 pt-5'>
        <h1 className='text-white font-new-amsterdam text-3xl mb-5'>Pokemon's</h1>
        <ul className='pb-5'>
            {pokemons.map((pokemon, index)=>(
                <li onClick={()=>onSelectPokemon(pokemon.name)} className="text-white text-xl font-new-amsterdam hover:text-gray-400 cursor-pointer" key={index}>{pokemon.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default List