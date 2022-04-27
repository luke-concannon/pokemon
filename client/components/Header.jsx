import React from 'react'

import HeaderLoggedIn from './HeaderLoggedIn'
import HeaderLoggedOut from './HeaderLoggedOut'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const Header = () => {

  return (
    <div className ='header-container'>
       <header>
        <div className='header'>
           <img src='../images/pokes.png' className='logo'/>
           <div className='header-right'>
           <h1>Classic Pokes</h1>
           <h3>An Homage to the Original 150</h3>
           <IfAuthenticated>
             <HeaderLoggedIn />
           </IfAuthenticated>
           <IfNotAuthenticated>
             <HeaderLoggedOut />
           </IfNotAuthenticated>
           </div>
         </div>
       </header>
       </div>
  )
  }

export default Header
  