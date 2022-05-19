import { combineReducers } from 'redux'
import errorMessage from './errorMessage'
import pokemon from './pokemon'
import user from './user'
import loading from './loading'
import onePokemon from './onePokemon'

export default combineReducers({
    errorMessage,
    pokemon,
    user,
    loading,
    onePokemon
})