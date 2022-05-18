import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ErrorMessage from '../utils/ErrorMessage'
import Loading from '../utils/Loading'
import PokemonList from '../pokemon/PokemonList'
import NameDropdown from '../dropdowns/SearchByName'
import { clearPokemon } from '../../actions'

const Learn = () => {
  const isLoading = useSelector(state => state.loading)
  const [searchBox, setSearchBox] = useState('name')
  const dispatch = useDispatch()

  const renderDropdown = (searchBy) => {
    dispatch(clearPokemon())
    setSearchBox(searchBy)
  }

  const setDropdown = () => {
    switch (searchBox) {
      case 'name':
        return <NameDropdown />
      case 'type':
        return <h1>type</h1>
      case 'rating':
        return <h1>rating</h1>
       case 'habitat':
        return <h1>habitat</h1>
      case 'colour':
        return <h1>colour</h1>
    
      default:
        break;
    }
  }

  return (
    <div className='learn-container'>
          <div className="search-by">
          <button style={{cursor:"pointer"}} onClick={() => renderDropdown('name')}>&gt;&gt;By Name</button>
          <button style={{cursor:"pointer"}} onClick={() => renderDropdown('type')}>&gt;&gt;By type</button>
          <button style={{cursor:"pointer"}} onClick={() => renderDropdown('rating')}>&gt;&gt;By Rating</button>
          <button style={{cursor:"pointer"}} onClick={() => renderDropdown('habitat')}>&gt;&gt;By Habitat</button>
          <button style={{cursor:"pointer"}} onClick={() => renderDropdown('colour')}>&gt;&gt;By Colour</button>
          </div>
    <ErrorMessage />
      <div className='dropdowns'>
        {setDropdown()}
      </div>  
      {isLoading ? <Loading /> : <PokemonList />}  
    </div>
  )
  }

export default Learn
  