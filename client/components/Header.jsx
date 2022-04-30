import React from 'react'

import HeaderLoggedIn from './HeaderLoggedIn'
import HeaderLoggedOut from './HeaderLoggedOut'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const Header = () => {

  return (
    <div className ='header-container'>
       <header>
        <div className='header'>
           <div className='header-left'>
           <h1>Rātā and The Pokémon</h1>
           <h3>In Honor of the Revered Pokémon Trainer, Rātā Marley Rose</h3>
           <IfAuthenticated>
             <HeaderLoggedIn />
           </IfAuthenticated>
           <IfNotAuthenticated>
             <HeaderLoggedOut />
           </IfNotAuthenticated>
           </div>
           <img src='../images/pokes.png' className='logo'/>
         </div>
       </header>
       </div>
  )
  }

export default Header
  