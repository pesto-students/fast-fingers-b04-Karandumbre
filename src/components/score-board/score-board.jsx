import React from "react";

import {
  ScoreBoardHeaderStyled,
  ScoreBoardScrollableContentStyled,
  ScoreBoardHistoryContentStyled,
  ScoreBoardBestPersonalScoreStyled,
  ScoreBoardScoreWrapperStyled,
} from "./score-board.styled";

const getMaxIndex = (list) => {
  const index = list.findIndex((currentValue, index, arr) => {
    return (
      currentValue.score === Math.max(...arr.map(({ name, score }) => score))
    );
  });
  return index;
};

const ScoreBoard = ({ history }) => {
  const maxIndex = getMaxIndex(history);
  return (
    <>
      <ScoreBoardHeaderStyled>SCORE BOARD</ScoreBoardHeaderStyled>
      <ScoreBoardScrollableContentStyled>
        {history.map(({ name, score }, i) => (
          <ScoreBoardHistoryContentStyled key={i}>
            {history.length > 1 && maxIndex === i && (
              <ScoreBoardBestPersonalScoreStyled>
                Personal Best
              </ScoreBoardBestPersonalScoreStyled>
            )}
            <ScoreBoardScoreWrapperStyled>
              Game {i + 1} : {score}
            </ScoreBoardScoreWrapperStyled>
          </ScoreBoardHistoryContentStyled>
        ))}
      </ScoreBoardScrollableContentStyled>
    </>
  );
};
export default ScoreBoard;
