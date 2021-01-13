import { combineReducers } from 'redux'
import adventureReducer from './adventureReducer'
import eventReducer from './eventReducer'

const rootReducer = combineReducers({
    adventureReducer,
    eventReducer
})

export default rootReducer;