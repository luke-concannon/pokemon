import axios from 'axios'
import { minifyPokemon, pokemonLowerCase } from '../controllers'

export const getPokemonByName = async (name) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    console.log(minifyPokemon(response.data),pokemonLowerCase())
    // console.log(response.data)
  } catch (err) {
    console.log(err)
  }
}

export const getPokemonByType = async (type) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${type}`)
    console.log(minifyPokemon(response.data),pokemonLowerCase())
    // console.log(response.data)
  } catch(error) {
    console.error(error)
  }
}