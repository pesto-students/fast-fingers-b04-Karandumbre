import React from "react";
import { GameScoreWrapperStyled } from "./game-score.styled";

const GameScore = ({ score, isGameEnded }) => {
  return (
    <>
      <div>fast fingers</div>
      {!isGameEnded && (
        <GameScoreWrapperStyled>SCORE: {score}</GameScoreWrapperStyled>
      )}
    </>
  );
};

export default GameScore;
