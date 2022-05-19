import React from 'react'
import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

import { IfAuthenticated, IfNotAuthenticated } from '../utils/Authenticated'
import { clearPokemon } from '../../actions/index'

const Header = () => {
  const { logout, loginWithRedirect } = useAuth0()
  const dispatch = useDispatch()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  const clearPokemonState = () => {
    dispatch(clearPokemon())
  }

  return (
       <header className ='header-container'>
        <Link to="/">
          <div className="header-logo">
             <img src="https://img.pokemondb.net/artwork/large/ivysaur.jpg"/>
             <div className='header-title'>
             <h1>PokéPaedia</h1>
             <h3>An Encyclopaedia of Pokémon, for my daughter Rātā</h3>
             </div>
          </div>
        </Link>
            <nav className='main-nav'>
                <Link to="/learn">
                  <button className='button-56' onClick={clearPokemonState}>SEARCH</button>
                </Link>
                {/* <Link to="/dojo">
                  <button className='button-56'>DOJO</button>
                </Link>
                <Link to="/battle">
                  <button className='button-56'>BATTLE</button>
                </Link>
                <Link to="/trade">
                  <button className='button-56'>TRADE</button>
                </Link> */}
                <IfAuthenticated>
                <button className='button-56 login-logout' onClick={handleLogoff}>LOGOUT</button>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <button className='button-56 login-logout' onClick={handleSignIn}>LOGIN</button>
              </IfNotAuthenticated>
            </nav>
       </header>
  )
  }

export default Header
  