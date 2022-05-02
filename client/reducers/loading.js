import { SHOW_ERROR, REQUEST_POKEMON, RECEIVE_POKEMON } from '../actions'

function loading(state = false, action) {
  switch (action.type) {
    case REQUEST_POKEMON:
      return true

    case RECEIVE_POKEMON:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default loading