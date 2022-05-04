import React from 'react'
import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

import { IfAuthenticated, IfNotAuthenticated } from './auth/Authenticated'
import { clearPokemon } from '../actions'

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
    <div className ='header-container'>
       <header>
        <div className='header'>
           <div className='header-left'>
           <Link to="/">
             <h1>Rātā and The Pokémon</h1>
          </Link>
           <h3>In Honor of the Great Pokémon Trainer, Rātā Marley Rose</h3>
           <div>
            <nav className='main-nav'>
              <IfAuthenticated>
                <button className='button-56' onClick={handleLogoff}>LOGOUT</button>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <button className='button-56' onClick={handleSignIn}>LOGIN</button>
              </IfNotAuthenticated>
                <Link to="/learn">
                  <button className='button-56' onClick={clearPokemonState}>LEARN</button>
                </Link>
                <Link to="/dojo">
                  <button className='button-56'>DOJO</button>
                </Link>
                <Link to="/battle">
                  <button className='button-56'>BATTLE</button>
                </Link>
                <Link to="/trade">
                  <button className='button-56'>TRADE</button>
                </Link>
            </nav>
           </div>
           </div>
           <img src='../images/pokes.png' className='logo'/>
         </div>
       </header>
       </div>
  )
  }

export default Header
  