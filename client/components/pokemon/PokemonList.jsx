import React from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokemonCard'

const PokemonList = () => {
    const pokemon = useSelector(state => state.pokemon)

  return (
    <div className ='pokemon-list'>
        {pokemon.slice(0).reverse().map(poke => <PokeCard key={poke.id} {...poke}/>)}
    </div>
  )
  }

export default PokemonList
  