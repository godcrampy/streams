import { SET_IS_SIGNED_IN } from './actions'

export const setIsSignedIn = (isSignedIn) => {
  return {
    type: SET_IS_SIGNED_IN,
    payload: isSignedIn
  }
}