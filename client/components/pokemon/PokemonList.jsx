import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const PokemonList = () => {
    const pokemon = useSelector(state => state.pokemon)

  return (
    <div className ='pokemon-list'>
        {pokemon.slice(0).reverse().map((poke, index) => (<Card key={index} pokemon={poke} />))}
    </div>
  )
  }

export default PokemonList
  