import React from 'react'
import { useSelector } from 'react-redux'


import ErrorMessage from './ErrorMessage'
import Loading from './Loading'
import PokemonList from './PokemonList'
import NameDropdown from './SearchByName'

const Learn = () => {
  const isLoading = useSelector(state => state.loading)

  return (
    <div className='learn-container'>    
    <ErrorMessage />
      <div className='dropdowns'>
        <NameDropdown />
      </div>  
      {isLoading ? <Loading /> : <PokemonList />}  
    </div>
  )
  }

export default Learn
  