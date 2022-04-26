import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { clearPokemon, searchVis } from '../actions'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const Header = () => {
  // const [dropdownVis, setDropdownVis] = useState(false)
  const dispatch = useDispatch()
  const searchVisible = useSelector(state => state.searchVis)
  const pokemon = useSelector(state => state.pokemon)

  const { logout, loginWithRedirect } = useAuth0()

  const searchClick = () => {
    searchVisible === true ? dispatch(clearPokemon()) : pokemon
    dispatch(searchVis(!searchVisible))  
  }

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({ redirectUri:`${window.location.origin}/register` })
   }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()  
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
              <IfAuthenticated>
                <a href="/" onClick={handleLogoff}>Log off</a>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <a href="/" onClick={handleRegister}>Register</a>
                <a href="/" onClick={handleSignIn}>Sign in</a>
              </IfNotAuthenticated>
           </nav>
           </div>
         </div>
       </header>
       </div>
  )
  }

export default Header
  