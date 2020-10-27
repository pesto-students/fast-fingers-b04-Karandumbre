import { DifficultyLevel, screenInfo } from "../contants/enums";
import { USER_SCREEN, USER_PROPERTIES, USER_HISTORY } from "./types";

export const currentUserScreen = (store, action) => {
  if (action.type === USER_SCREEN) {
    return {
      value: action.value,
    };
  }
  return store || { value: screenInfo.HOME };
};

export const userProperties = (store, action) => {
  if (action.type === USER_PROPERTIES) {
    return action.value;
  }
  return store || { difficultyLevel: DifficultyLevel.EASY, userName: "John" };
};

export const userHistory = (store, action) => {
  if (action.type === USER_HISTORY) {
    return action.value;
  }
  return store || [];
};
