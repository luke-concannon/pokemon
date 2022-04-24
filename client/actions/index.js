import axios from 'axios'
import { minifyPokemon, getNameImg } from '../controllers'

// VARS
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON'
export const SHOW_ERROR = 'SHOW_ERROR'
export const SEARCH_VIS = 'SEARCH_VIS'
export const CLEAR_POKEMON = 'CLEAR_POKEMON'

// FUNCS
export function receivePokemon(pokemon) {
  return {
    type: RECEIVE_POKEMON,
    pokemon: pokemon
  }
}

export function clearPokemon() {
  return {
    type: CLEAR_POKEMON,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function searchVis(boolean) {
  return {
    type: SEARCH_VIS,
    searchVis: boolean,
  }
}

// THUNKS - Pokemon
// export function fetchPokemonByType(type) {
//   return async (dispatch) => {
//     try {
//       dispatch(requestPokemon())
//       const res = await request.get(`/api/v1/pokemon/type/${type}`)
//       dispatch(receivePokemon(res.body))
//       console.log(res.body)
//     } catch (err) {
//         dispatch(showError(err.message))
//     }
//   }
// }

const getPokemonAsync = async (selectionArr) => {
  const pokemons = []

  for (let i = 0; i < selectionArr.length; i++) {
          const pokemonAttributes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectionArr[i].toLowerCase()}`)
          const pokeEvolution = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${selectionArr[i].toLowerCase()}/`)
          const pokeFromApi = minifyPokemon(pokemonAttributes.data, pokeEvolution.data)
          const pokeFromArr = getNameImg(selectionArr[i])
          const pokemon = {...pokeFromApi, ...pokeFromArr}
          pokemons.push(pokemon)
        }
        return pokemons
}

export function fetchPokemonByName(selectionArr) {
  return async (dispatch) => {
    try {
        const pokemons = await getPokemonAsync(selectionArr)
        console.log(pokemons)
        dispatch(receivePokemon(pokemons))
    } catch (err) {
        dispatch(showError(err.message))
    }
  }
}