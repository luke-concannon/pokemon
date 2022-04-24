import { combineReducers } from 'redux'
import errorMessage from './errorMessage'
import pokemon from './pokemon'
import searchVis from './searchVis'

export default combineReducers({
    errorMessage,
    pokemon,
    searchVis
})