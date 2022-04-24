import React, { useState, useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'

import { clearPokemon, searchVis } from '../actions'
import NameDropdown from './SearchByName'
import TypeDropdown from './SearchByType'


const Header = () => {
  // const [dropdownVis, setDropdownVis] = useState(false)
  const dispatch = useDispatch()
  const searchVisible = useSelector(state => state.searchVis)
  const pokemon = useSelector(state => state.pokemon)

  const searchClick = () => {
    searchVisible === true ? dispatch(clearPokemon()) : pokemon
    dispatch(searchVis(!searchVisible))    
  }

  return (
    <div className ='header-container'>
       <header>
        <div className='header'>
           <img src='../images/pokes.png' className='logo'/>
           <div className='header-right'>
           <h1>Classic Pokes</h1>
           <h3>An Homage to the Original 150</h3>
           <nav className='main-nav'>
              <button className='button-56' onClick={searchClick}>{searchVisible === false ? 'Search' : 'Exit Search'}</button>
           </nav>
           {searchVisible === true && 
             <div className='dropdowns'>
               <NameDropdown />
               <TypeDropdown />
             </div>}
           </div>
         </div>
       </header>
       </div>
  )
  }

export default Header
  