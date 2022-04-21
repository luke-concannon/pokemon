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