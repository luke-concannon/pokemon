import React, { useState, useEffect } from 'react'
import { getPokemon } from '../api'

const HomeLoggedOut = () => {
    const [pokemon, setPokemon] = useState({})

  const getRandomId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    const randomId = Math.floor(Math.random() * (max - min) + min)
    return ({
        id: randomId
    })
  } 

  const randomPoke = async () => {
    const id = getRandomId()
    try {
      const res = await getPokemon(id)
      const pokemon = res.body
      setPokemon(pokemon) 
    } catch (err) {
         console.error(err.message)
    }
  }

  useEffect(() => {
    randomPoke()
  }, [])

  return (
    <div className='home-container'>
      
      <div className='logged-out-container'>
      <div className='logged-out-image'>
        <img src={pokemon.image} />
      </div>
      <div className='logged-out-details'>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.blurb}</p>
        <button onClick={randomPoke}>&gt;&gt;&gt; Next Pokemon</button>
      </div>
      </div>
    </div>
  )
  }

export default HomeLoggedOut
  