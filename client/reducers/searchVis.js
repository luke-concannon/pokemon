import { SEARCH_VIS } from '../actions'

const initialState = false

const searchVis = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VIS:
      return action.searchVis

    default:
      return state
  }
}

export default searchVis