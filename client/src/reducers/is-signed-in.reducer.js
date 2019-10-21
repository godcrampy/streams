import { SET_IS_SIGNED_IN } from '../actions/actions'

const isSignedInReducer = (state = false, action) => {
  switch (action.type) {
    case (SET_IS_SIGNED_IN):
      return action.payload;
    default:
      return state;
  }
}

export default isSignedInReducer;