import React, { useState, useEffect } from 'react'
import { getPokemonByName } from '../api/pokemon'
import pokeArray from '../data/pokemonArray'
import PokeCard from './PokemonCard'
import Select from 'react-select'
import Header from './Header'

const App = () => {
  const [pokemon, setPokemon] = useState(null)
  const [dropdownVis, setDropdownVis] = useState(false)

  const pokeSelect = pokeArray.map(pokemon => {
    return {
      value: pokemon.name,
      label: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
  }}
  )
  
  const loadPokemon = async (name) => {
      const pokeFromApi = await getPokemonByName(name)
      const index = pokeArray.findIndex(poke => poke.name === name)
      const pokeFromArr = pokeArray[index]
      setPokemon({ ...pokeFromApi, ...pokeFromArr  })
  }

  // useEffect(() => {
  //    loadPokemon()
  // }, [])

  return (
    <div className='app-container'>
      <div className ='header-container'>
      <header>
        <div className='header'>
          <img src='../images/pokes.png' className='logo'/>
          <div className='header-right'>
          <h1>Classic Pokes</h1>
          <nav className='main-nav'>
             <button className='button-56' onClick={(() => setDropdownVis(!dropdownVis))}>{dropdownVis === false ? 'Search' : 'Exit Search'}</button>
             <button className='button-56'>Learn</button>
             <button className='button-56'>Battle</button>
          </nav>
          </div>
        </div>
      </header>
      </div>
      {dropdownVis === true && <div className='dropdowns'>
      <Select
      isMulti      
      placeholder='By Type'
      options={pokeSelect}
      onChange={(opt) => console.log(opt)}
      />
      <Select
      isClearable={true}
      placeholder='By Name'
      options={pokeSelect}
      onChange={(opt) => loadPokemon(opt.value)}
      />
      </div>}
      {dropdownVis === true ? pokemon !== null && <PokeCard {...pokemon} /> : null}
    </div>
  )
  }


export default App
  