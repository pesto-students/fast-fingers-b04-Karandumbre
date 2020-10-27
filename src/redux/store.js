import { combineReducers } from "redux";
import { createStore } from "redux";
import { currentUserScreen, userProperties, userHistory } from "./reducers";

const rootReducer = combineReducers({
  currentUserScreen,
  userProperties,
  userHistory,
});

export const store = createStore(rootReducer);

export default store;
