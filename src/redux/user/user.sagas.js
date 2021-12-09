import { takeLatest, put, call, all } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  signinSuccess,
  signinFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

function checkUserSignUpInputs(userInfos) {
  const { password, confirmPassword } = userInfos;
  if (password !== confirmPassword) {
    throw new Error("Ups ! Passwords don't mach");
  }
}

// Saga subtasks
function* getSnapshotFromUserAuth(user, additionnalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      user,
      additionnalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFailure(error));
  }
}

// Sagas tasks
function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signInWithMail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signUpWithMail({
  payload: { displayName, email, password, confirmPassword },
}) {
  try {
    yield checkUserSignUpInputs({ password, confirmPassword });
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionnalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionnalData } }) {
  yield getSnapshotFromUserAuth(user, additionnalData);
}

// Sagas spawn
function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithMail);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onEmailSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, signUpWithMail);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

// User sagas grouping
export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onCheckUserSession),
    call(onEmailSignUpStart),
    call(onSignUpSuccess),
  ]);
}
