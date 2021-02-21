import AccountActionTypes from "./account.types";

export const loadAccountsStart = () => ({
  type: AccountActionTypes.LOAD_ACCOUNT_START,
});

export const loadAccountsSuccess = (accounts) => ({
  type: AccountActionTypes.LOAD_ACCOUNT_SUCCESS,
  payload: accounts,
});

export const loadAccountsFail = (error) => ({
  type: AccountActionTypes.LOAD_ACCOUNT_FAIL,
  payload: error,
});
