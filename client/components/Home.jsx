import React from 'react'
import HomeLoggedIn from './HomeLoggedIn'
import HomeLoggedOut from './HomeLoggedOut'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Footer from './Footer'

const Home = () => {

  return (
    <div>
        <IfAuthenticated>
          <HomeLoggedIn />
        </IfAuthenticated>
         <IfNotAuthenticated>
          <HomeLoggedOut />
        </IfNotAuthenticated>
    </div>
  )
  }

export default Home
  