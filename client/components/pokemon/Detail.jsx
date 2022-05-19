import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { fetchOnePokemonByName } from '../../actions/index'
import Loading from '../utils/Loading'

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoading = useSelector(state => state.loading)
  const pokemon = useSelector(state => state.onePokemon)

  useEffect(() => {
    dispatch(fetchOnePokemonByName(id))
  }, [])

  return (
    <div className='detail-container'>
        {isLoading === true
        ? <Loading /> 
        : (
          <>
          <div className="details">
            <button onClick={() => navigate(-1)}>go back</button>
        <div className='details-left-title'>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.blurb}</p>
        </div>
        <div className="details-left-stats">
          <p>{pokemon.habitat}</p>
          <p>{pokemon.colour}</p>
          <p>{pokemon.shape}</p>
          <p>{pokemon.attack}</p>
          <p>{pokemon.defense}</p>
        </div>
        </div>
        <div className='details-image'>
          <img src={pokemon.image} />
        </div>
        </>
        )}
    </div>
  )
  }

export default Detail
  