    
import { combineReducers } from 'redux'
import appStatus from './appStatusR'
import dogs from './dogsR.js'

export default combineReducers({
    appStatus,
    dogs
})