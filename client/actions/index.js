import { getPokemonAsync } from '../controllers'

// VARS
export const REQUEST_POKEMON = 'REQUEST_POKEMON'
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON'
export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_POKEMON = 'CLEAR_POKEMON'
export const FLIP_CARD = 'FLIP_CARD'

// FUNCS
export function requestPokemon() {
  return {
    type: REQUEST_POKEMON,
  }
}

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

// THUNKS - Pokemon (asnyc redux) 
export const fetchPokemonByName = (selectionArr) => {
  return async (dispatch) => {
    try {
      dispatch(requestPokemon())
      const pokemons = await getPokemonAsync(selectionArr)
      dispatch(receivePokemon(pokemons))
    } catch (err) {
        dispatch(showError(err.message))
    }
  }
}