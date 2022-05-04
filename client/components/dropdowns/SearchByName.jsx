import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

import { fetchPokemonByName } from '../../actions'
import { getAllPokemon } from '../../api'

const NameDropdown = () => {
  const [allPokemon, setAllPokemon] = useState([])
  const dispatch = useDispatch()

  const allPokesFromDb = async () => {
    const allPokes = await getAllPokemon()
    const options = allPokes.map(poke => {
      return {
      value: poke === `Farfetch’d` ? 'Farfetchd' : poke,
      label: poke === `Farfetch’d` ? 'Farfetchd' : poke,
    }
    })
    setAllPokemon(options)
  }

  const dispatchPokemon = (names) => {
    dispatch(fetchPokemonByName(names))
  }

  const getMultiPokeArray = (arr) => {
    const multiPokeArray = arr.map(e => e.value)
    return multiPokeArray
  }

  useEffect(() => {
    allPokesFromDb()
  }, [])

  return (
    <div>
      <Select
      isMulti
      placeholder='Search Pokemon by Name'
      options={allPokemon}
      onChange={e => dispatchPokemon(getMultiPokeArray(e))} />
    </div>
  )
  }

export default NameDropdown

  