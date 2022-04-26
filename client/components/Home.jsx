import React from 'react'
import { useSelector } from 'react-redux'

import ErrorMessage from './ErrorMessage'
import PokemonList from './PokemonList'
import NameDropdown from './SearchByName'
import TypeDropdown from './SearchByType'

const Home = () => {
  const searchVisible = useSelector(state => state.searchVis)

  return (
    <div className='app-container'>
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

export default Home
  