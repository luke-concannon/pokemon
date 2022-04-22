import React, { useState, useEffect } from 'react'
import { getEvolutionById, getPokemonByName } from '../api/pokemon'
import pokeArray from '../data/pokemonArray'
import PokeCard from './PokemonCard'
import Select from 'react-select'

const App = () => {
  const [pokemon, setPokemon] = useState({})
  const [pokeDropdown, setPokeDropdown] = useState({})

  const pokeSelect = pokeArray.map(pokemon => {
    return {
      value: pokemon.name,
      label: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
  }}
  )
  

  const loadPokemon = async (name) => {
      const pokeFromApi = await getPokemonByName(name)
      const index = pokeArray.findIndex(poke => poke.name === name)
      const pokeFromArr = pokeArray[index]
      setPokemon({ ...pokeFromApi, ...pokeFromArr  })
  }

  useEffect(() => {
     loadPokemon()
  }, [])

  return (
    <div>
      <Select
      placeholder='Select a Pokemon'
      options={pokeSelect}
      onChange={(opt) => loadPokemon(opt.value)}
      />
      <PokeCard {...pokemon} />
      {/* {pokeArray.map(pokemon =>
      <ul key={pokemon.image}>
      <img src={pokemon.image} />
      <h3 >{pokemon.name}</h3>
      </ul> 
      )} */}
    </div>
  )
  }


export default App
  