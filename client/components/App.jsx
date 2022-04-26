import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import pokeArray from '../data/pokemonArray'
import ErrorMessage from './ErrorMessage'
import Header from './Header'
import PokemonCard from './PokemonCard'
import PokemonList from './PokemonList'
import NameDropdown from './SearchByName'
import TypeDropdown from './SearchByType'

const App = () => {
  const pokemon = useSelector(state => state.pokemon)
  const searchVisible = useSelector(state => state.searchVis)

  return (
    <div className='app-container'>
      <Header />
      {searchVisible === true && 
          <div className='dropdowns'>
            <NameDropdown />
            <TypeDropdown />
          </div>}
      <PokemonList />
      <ErrorMessage />
    </div>
  )
  }

export default App
  