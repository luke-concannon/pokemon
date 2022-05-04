import React from 'react'
import { useSelector } from 'react-redux'


import ErrorMessage from '../utils/ErrorMessage'
import Loading from '../utils/Loading'
import PokemonList from '../pokemon/PokemonList'
import NameDropdown from '../dropdowns/SearchByName'

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
  