import { combineReducers } from "redux";

const appReducers = combineReducers({});

export const rootReducers = (state, action) => {
  if (action.type === "logOut") {
    const newState = {};
    return appReducers(newState, action);
  }
  return appReducers(state, action);
};
