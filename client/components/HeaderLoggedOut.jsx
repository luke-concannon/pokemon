import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {

  const { loginWithRedirect } = useAuth0()

//   function handleRegister(e) {
//     e.preventDefault()
//     loginWithRedirect({ redirectUri:`${window.location.origin}/register` })
//    }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()  
  }

  return (
    <div className='main-nav'>
        <nav>
            {/* <button onClick={handleRegister}>Register</button> */}
            <button className='button-56' onClick={handleSignIn}>Login</button>
        </nav>
    </div>

  )
  }

export default Header
  