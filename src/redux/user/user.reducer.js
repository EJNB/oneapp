import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  token: {
    idToken: "",
    expireDate: null,
  },
  currentUser: {
    name: "",
    email: "",
    uuid: "",
  },
  error: null,
};

const awsCognitoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default awsCognitoReducer;
