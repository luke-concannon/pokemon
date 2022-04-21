import React, { useState, useEffect } from 'react'
import { getPokemon } from '../api/apiClient'
import pokeArray from '../data/pokemonArray'

const App = () => {
    const loadPokemon = () => {
    getPokemon()
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <div>
      {pokeArray.map(pokemon =>
      <ul key={pokemon.image}>
      <img src={pokemon.image} />
      <h3 >{pokemon.name}</h3>
      </ul> 
      )}
    </div>
  )
  }


export default App
