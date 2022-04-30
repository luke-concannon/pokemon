import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { clearPokemon, searchVis } from '../actions'
import NameDropdown from './SearchByName'

const Header = () => {
  // const [dropdownVis, setDropdownVis] = useState(false)
  const dispatch = useDispatch()
  const searchVisible = useSelector(state => state.searchVis)
  const pokemon = useSelector(state => state.pokemon)

  const { logout } = useAuth0()

  const searchClick = () => {
    searchVisible === true ? dispatch(clearPokemon()) : pokemon
    dispatch(searchVis(!searchVisible))  
  }

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  return (
    <div>
        <nav className='main-nav'>
            <button className='button-56' onClick={handleLogoff}>Logout</button>
            <button className='button-56' onClick={searchClick}>{searchVisible === false ? 'Search' : 'Exit Search'}</button>
            <button className='button-56'>PokeDojo</button>
        </nav>
        {searchVisible === true &&
        <div className='dropdowns'>
            <NameDropdown />
          </div>}
    </div>
  )
  }

export default Header
  