// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import Select from 'react-select'

// const TypeDropdown = ({ children }) => {
//   const [type, setType] = useState('')
//   const dispatch = useDispatch()

//   const dispatchPokemon = (pokeType) => {
//     dispatch(fetchPokemon(pokeType))
//   }


//   return (
//     <div>
//       <Select
//       isClearable={true}
//       placeholder='By Name'
//       options={pokeSelect}
//       onChange={(e) => dispatchPokemon((e.value))} />
//     </div>
//   )
//   }

// export default TypeDropdown
  import React from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import pokeArray from '../data/pokemonArray'
import { fetchPokemonByName } from '../actions'

const NameDropdown = () => {
  const dispatch = useDispatch()

    const pokeSelect = pokeArray.map(pokemon => {
    return {
      value: pokemon.name,
      label: pokemon.name,
  }}
  )

  const dispatchPokemon = (name) => {
    dispatch(fetchPokemonByName(name))
  }

  const getMultiPokeArray = (arr) => {
    const multiPokeArray = arr.map(e => e.value)
    return multiPokeArray
  }

  return (
    <div>
      <Select
      isClearable={true}
      isMulti
      placeholder='Not you Pitta Bread'
      options={pokeSelect}
      onChange={e => console.log(getMultiPokeArray(e))} />
    </div>
  )
  }

export default NameDropdown

  