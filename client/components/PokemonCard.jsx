import React, { useEffect } from 'react'
import { getPokemonByName } from '../api/pokemon'
import pokeArray from '../data/pokemonArray'

const PokemonCard = () => {
    const loadPokemon = async () => {
      const onePokemon = await getPokemonByName('squirtle')
      console.log(onePokemon)
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <div>
      {/* {pokeArray.map(pokemon =>
      <ul key={pokemon.image}>
      <img src={pokemon.image} />
      <h3 >{pokemon.name}</h3>
      </ul> 
      )} */}
    </div>
  )
  }


export default PokemonCard
