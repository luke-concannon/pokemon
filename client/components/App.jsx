import React, { useEffect } from 'react'
import { getPokemonByName } from '../api/pokemon'
import pokeArray from '../data/pokemonArray'
// import PokemonCard from './PokemonCard'
import Select from 'react-select'

const App = () => {
  const loadPokemon = async () => {
    const onePokemon = await getPokemonByName('squirtle')
    console.log(onePokemon)
    
  }

  const pokeNames = pokeArray.map(pokemon => {
    return {
      value: pokemon.name,
      label: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    }
  })

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <div>
      {console.log({pokeNames})}
        {/* // onChange={() => {}} */}
       {/* /> */}
      {/* <PokemonCard /> */}
    
    </div>
  )
  }


export default App
