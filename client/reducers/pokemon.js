import { RECEIVE_POKEMON, CLEAR_POKEMON } from '../actions'

const initialState = []

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon

    case CLEAR_POKEMON:
      return initialState

    default:
      return state
  }
}

export default pokemon