import { RECEIVE_ONE_POKEMON, CLEAR_ONE_POKEMON } from '../actions'

const initialState = {}

const pokemonDetail = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return action.onePokemon

    case CLEAR_ONE_POKEMON:
      return initialState

    default:
      return state
  }
}

export default pokemonDetail