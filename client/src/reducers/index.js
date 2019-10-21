import { combineReducers } from 'redux'
import { sessionReducer } from 'redux-react-session'
import isSignedInReducer from './is-signed-in.reducer'

export default combineReducers({
  isSignedIn: isSignedInReducer,
  session: sessionReducer
})