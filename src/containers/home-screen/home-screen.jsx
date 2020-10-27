import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserScreen, setUserProperties } from "../../redux/actions";
import { DifficultyLevel, screenInfo } from "../../contants/enums";

// styles
import {
  HomeScreenWrapperStyled,
  HomeScreenHeaderContentWrapperStyled,
  HomeScreenSubHeaderContentWrapperStyled,
  HomeScreenInputWrapperStyled,
  HomeScreenInputStyled,
  HomeScreenStartGameWrapperStyled,
  HomeScreenSelectStyled,
} from "./home-screen.styled";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { userName, difficultyLevel } = useSelector(
    (state) => state.userProperties
  );
  const handleStartGame = () => {
    dispatch(setUserScreen(screenInfo.GAME));
  };

  return (
    <HomeScreenWrapperStyled>
      <img src={require("./../../assets/images/keyboard.svg")} alt="keyboard" />
      <HomeScreenHeaderContentWrapperStyled>
        fast fingers
      </HomeScreenHeaderContentWrapperStyled>
      <HomeScreenSubHeaderContentWrapperStyled>
        the ultimate typing game
      </HomeScreenSubHeaderContentWrapperStyled>
      <HomeScreenInputWrapperStyled>
        <HomeScreenInputStyled
          placeholder="TYPE YOUR NAME"
          onBlur={(e) =>
            dispatch(setUserProperties(e.target.value, difficultyLevel))
          }
        />
      </HomeScreenInputWrapperStyled>
      <div>
        <HomeScreenSelectStyled
          onChange={(e) =>
            dispatch(setUserProperties(userName, parseInt(e.target.value)))
          }
        >
          <option value={DifficultyLevel.EASY}>EASY</option>
          <option value={DifficultyLevel.MEDIUM}>MEDIUM</option>
          <option value={DifficultyLevel.HARD}>HARD</option>
        </HomeScreenSelectStyled>
      </div>
      <HomeScreenStartGameWrapperStyled tabIndex={0} onClick={handleStartGame}>
        START GAME
      </HomeScreenStartGameWrapperStyled>
    </HomeScreenWrapperStyled>
  );
};
export default HomeScreen;
