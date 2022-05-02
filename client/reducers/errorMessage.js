import { SHOW_ERROR, REQUEST_POKEMON } from '../actions'

const initialState = ''

function errorMessage(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.errorMessage

    case REQUEST_POKEMON:
      return initialState

    default:
      return state
  }
}

export default errorMessage