import userActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE,action) => {
  switch(action.type){
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case userActionTypes.UPDATE_USER_DETAILS:
      return {
        ...state,
        userUpdate: action.payload
      }
    case userActionTypes.SET_USER_GUIDES:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          guides: action.payload
        }
      }
    default:
      return state;
  }
};

export default userReducer
