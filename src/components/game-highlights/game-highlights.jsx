import React from "react";

import {
  GameHighlightsWrapperStyled,
  GameHighlightsCurrentAttemptStyled,
  GameHighlightsCurrentAttemptGameScoreStyled,
  GameHighlightsNewHighScoreStyled,
  GameHighlightsPlayAgainStyled,
  GameHighlightsImageStyled,
} from "./game-highlights.styled";

const EndScoreBoard = ({ gameNo, score, isNewHighScore, onPlayAgain }) => {
  return (
    <GameHighlightsWrapperStyled>
      <GameHighlightsCurrentAttemptStyled>
        Score : Game {gameNo}
      </GameHighlightsCurrentAttemptStyled>
      <GameHighlightsCurrentAttemptGameScoreStyled>
        {score}
      </GameHighlightsCurrentAttemptGameScoreStyled>
      {isNewHighScore && (
        <GameHighlightsNewHighScoreStyled>
          New High Score
        </GameHighlightsNewHighScoreStyled>
      )}
      <GameHighlightsPlayAgainStyled tabIndex={0} onClick={onPlayAgain}>
        <GameHighlightsImageStyled
          src={require("./../../assets/images/reload.svg")}
          alt="reload"
        />
        Play again
      </GameHighlightsPlayAgainStyled>
    </GameHighlightsWrapperStyled>
  );
};
export default EndScoreBoard;
