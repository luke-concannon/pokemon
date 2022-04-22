import axios from 'axios'
import { minifyPokemon, pokemonLowerCase } from '../controllers'

export const getPokemonByName = async (name) => {
  try {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    const pokeEvolution = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}/`)
    return minifyPokemon(pokemon.data, pokeEvolution.data)
  } catch (err) {
    console.log(err)
  }
}