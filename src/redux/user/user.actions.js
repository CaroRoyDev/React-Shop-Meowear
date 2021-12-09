import UserActionTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSigninStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSigninStart = ({ email, password }) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signinSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signinFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

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

export const emailSignUpStart = (userCredentials) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_START,
  payload: userCredentials,
});
export const signUpSuccess = ({ user, additionnalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionnalData },
});
export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
