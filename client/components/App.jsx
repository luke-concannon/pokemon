import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Register from './auth/Register'
import { cacheUser } from '../auth0-utils'
import Home from './pages/Home'
import Header from './Header'
import Footer from './Footer'
import Learn from './pages/Learn'
import Dojo from './pages/Dojo'
import Battle from './pages/Battle'
import Trade from './pages/Trade'

const App = () => {
  cacheUser(useAuth0)

  return (
    <div className='app-container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="learn" element={<Learn />} />
          <Route path="dojo" element={<Dojo />} />
          <Route path="battle" element={<Battle />} />
          <Route path="trade" element={<Trade />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App