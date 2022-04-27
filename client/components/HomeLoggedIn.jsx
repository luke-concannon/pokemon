import React from 'react'
import { useSelector } from 'react-redux'

import ErrorMessage from './ErrorMessage'
import PokemonList from './PokemonList'
import NameDropdown from './SearchByName'

const HomeLoggedIn = () => {
  const searchVisible = useSelector(state => state.searchVis)

  return (
    <div className='home-container'>
      {searchVisible === true && 
          <div className='dropdowns'>
            <NameDropdown />
          </div>}
      <PokemonList />
      <ErrorMessage />
    </div>
  )
  }

export default HomeLoggedIn
  