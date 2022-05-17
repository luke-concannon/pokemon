import React, { useState } from 'react'
import { useSelector } from 'react-redux'


import ErrorMessage from '../utils/ErrorMessage'
import Loading from '../utils/Loading'
import PokemonList from '../pokemon/PokemonList'
import NameDropdown from '../dropdowns/SearchByName'

const Learn = () => {
  const isLoading = useSelector(state => state.loading)
  const [searchBox, setSearchBox] = useState(null)

  return (
    <div className='learn-container'>
      <div className="learn-nav">
        <h3>Search Pokémon</h3>
          <div className="search-by">
          <h4 onClick={setSearchBox('name')}>&gt;&gt;By Name</h4>
          <h4 onClick={setSearchBox('type')}>&gt;&gt;By type</h4>
          <h4 onClick={setSearchBox('rating')}>&gt;&gt;By Rating</h4>
          <h4 onClick={setSearchBox('habitat')}>&gt;&gt;By Habitat</h4>
          <h4 onClick={setSearchBox('colour')}>&gt;&gt;By Colour</h4>
          </div>
        </div>  
    <ErrorMessage />
      <div className='dropdowns'>
        <NameDropdown />
      </div>  
      {isLoading ? <Loading /> : <PokemonList />}  
    </div>
  )
  }

export default Learn
  