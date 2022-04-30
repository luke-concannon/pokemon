import React from 'react'
import { useSelector } from 'react-redux'

import ErrorMessage from './ErrorMessage'
import PokemonList from './PokemonList'

const HomeLoggedIn = () => {
  const searchVisible = useSelector(state => state.searchVis)

  return (
    <div className='home-container'>          
      <PokemonList />
      <ErrorMessage />
    </div>
  )
  }

export default HomeLoggedIn
  