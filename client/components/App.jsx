import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import pokeArray from '../data/pokemonArray'
import ErrorMessage from './ErrorMessage'
import Header from './Header'
import PokemonCard from './PokemonCard'
import PokemonList from './PokemonList'
import SearchByName from './SearchByName'
import SearchBytype from './SearchByType'

const App = () => {
  const pokemon = useSelector(state => state.pokemon)


  return (
    <div className='app-container'>
      <Header />
        <PokemonList />
        <ErrorMessage />
    </div>
  )
  }

export default App
  