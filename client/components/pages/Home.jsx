import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getPokemonDb, getSpeciesApi } from '../../api'
import Loading from '../utils/Loading'
import { getBlurb } from '../../controllers'
import { requestPokemon, receivePokemon } from '../../actions/index'

const Home = () => {
  const isLoading = useSelector(state => state.loading)
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()

  const getRandomId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(809);
    const randomId = Math.floor(Math.random() * (max - min) + min)
    return ({
        id: randomId
    })
  } 

  const randomPoke = async () => {
    const id = getRandomId()
    dispatch(requestPokemon())
    try {
      const fromDb = await getPokemonDb(id)
      const fromApi = await getSpeciesApi(id.id)
      const blurb = getBlurb(fromApi.flavor_text_entries)
      const pokemon = {...fromDb, blurb}
      dispatch(receivePokemon(pokemon))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    randomPoke()
  }, [])

  return (
    <div>
      <div className='logged-out-container' onClick={randomPoke} style={{cursor:"pointer"}}>
        {isLoading === true
        ? <Loading /> 
        :(
          <>
        <div className='logged-out-image'>
        <img src={pokemon.image} />
        </div>
        <div className='logged-out-details'>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.blurb}</p>
          
          <button>&gt;&gt;&gt; Next</button>
        </div>
        </>
        )}
      </div>
    </div>
  )
  }

export default Home
  