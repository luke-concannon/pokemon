import axios from 'axios'
import { minifyPokemon, PokemonLowerCase } from '../controllers'

export const getPokemon = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/machoke')
    console.log(minifyPokemon(response.data),PokemonLowerCase())
    // console.log(response.data)
  } catch(error) {
    console.error(error)
  }
}

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