import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {

  const { loginWithRedirect } = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <div>
        <nav className='main-nav'>
            <button className='button-56' onClick={handleSignIn}>Login</button>
        </nav>
    </div>

  )
  }

export default Header
  