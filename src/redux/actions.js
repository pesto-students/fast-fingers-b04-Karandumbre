import { USER_SCREEN, USER_PROPERTIES, USER_HISTORY } from "./types";

export const setUserScreen = (value) => {
  return {
    type: USER_SCREEN,
    value,
  };
};

export const setUserProperties = (userName, difficultyLevel) => {
  return {
    type: USER_PROPERTIES,
    value: { userName, difficultyLevel },
  };
};

export const setUserHistory = (history) => {
  return {
    type: USER_HISTORY,
    value: history,
  };
};
