import React from "react";
import * as DifficultyLevel from "../../contants/utils";
import {
  PlayerInfoWraperStyled,
  PlayerInfoImageStyled,
} from "./player-info.styled";
const PlayerInfo = (props) => {
  return (
    <>
      <PlayerInfoWraperStyled isMarginBottomRequired>
        <PlayerInfoImageStyled
          src={require("./../../assets/images/person.svg")}
          alt="player"
        />
        {props.name}
      </PlayerInfoWraperStyled>
      <PlayerInfoWraperStyled>
        <PlayerInfoImageStyled
          src={require("./../../assets/images/gamepad.svg")}
          alt="player"
        />
        level: {DifficultyLevel[props.level]}
      </PlayerInfoWraperStyled>
    </>
  );
};
export default PlayerInfo;
