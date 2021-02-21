import UserActionTypes from "./user.types";

// Sign in actions.
export const signInStart = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (payload) => {
  console.log(payload);
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload,
  };
};

export const signInFail = (error) => {
  console.log(error);
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
  };
};

// Sign out actions.
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
