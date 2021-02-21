import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { signInSuccess, signInFail } from "./user.actions";

import { signInWithEmailAndPassword } from "../../services/auth.service";

export function* onEmailsignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInWithEmail);
}

export function* signInWithEmail({ payload }) {
  try {
    // Call sign in service.
    const { data } = yield signInWithEmailAndPassword(payload);
    // todo antes de llamar el success action hay q formatear la data.
    yield put(signInSuccess(data));
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* userSagas() {
  yield all([call(onEmailsignInStart)]);
}
