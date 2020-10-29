// vendor
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "idb-keyval";

// components
import PlayerInfo from "../../components/player-info/player-info";
import RenderWords from "../../components/render-words/render-words";
import GameScore from "../../components/game-score/game-score";
import ScoreBoard from "../../components/score-board/score-board";
import GameHighlights from "../../components/game-highlights/game-highlights";
import Timer from "./../../components/timer/timer";

// styled
import {
  GameScreenInfoWrapperStyled,
  GameScreenPlayerInfoWrapper,
  GameScreenScoreWrapperStyled,
  GameScreenScoreBoardStyled,
  GameScreenQuitStyled,
  GameScreenStopGameStyled,
  GameScreenInputStyled,
  GameScreenDashboardStyled,
  GameScreenWordMatchStyled,
  GameScreenMainContentWrapperStyled,
} from "./game-screen.styled";

// redux
import { setUserScreen, setUserHistory } from "../../redux/actions";

// constants
import { DifficultyLevel, screenInfo } from "../../contants/enums";

const GameScreen = ({ words }) => {
  const { difficultyLevel, userName } = useSelector(
    (state) => state.userProperties
  );

  const userHistory = useSelector((state) => state.userHistory);
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const [inputWord, setInputWord] = useState("");
  const [timer, setTimer] = useState(null);
  const [countDownCssTimer, setCountDownCssTimer] = useState(null);
  const [difficultyFactor, setDifficultyFactor] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);

  const handleWordInputChange = (e) => {
    if (word === e.target.value) {
      setUserScore(userScore + timer);
      setDifficultyFactor(difficultyFactor + 0.1);
      setInputWord("");
    } else {
      setInputWord(e.target.value);
    }
  };

  const calculateAndSetWord = () => {
    const arrIndex = Math.floor(Math.random() * words.length + 1);
    const wordFromLibrary = words[arrIndex];
    setWord(wordFromLibrary);
    const newTimer = 4 + Math.round(wordFromLibrary.length / difficultyFactor);
    setTimer(newTimer);
    setCountDownCssTimer(newTimer);
  };

  const getWordsFromIndexDb = async (difficultyType) =>
    await get(difficultyType);

  const calculateAndDifficultyFactor = () => {
    switch (difficultyLevel) {
      case DifficultyLevel.EASY:
        setDifficultyFactor(1);
        words = getWordsFromIndexDb("easy");
        break;
      case DifficultyLevel.MEDIUM:
        setDifficultyFactor(1.5);
        words = getWordsFromIndexDb("medium");
        break;
      case DifficultyLevel.HARD:
        setDifficultyFactor(2);
        words = getWordsFromIndexDb("hard");
        break;
      default:
        setDifficultyFactor(1);
        words = getWordsFromIndexDb("easy");
        break;
    }
  };

  const onStopGame = () => {
    dispatch(
      setUserHistory(userHistory.concat({ name: userName, score: userScore }))
    );
    dispatch(setUserScreen(screenInfo.HOME));
  };

  const onPlayAgain = () => {
    resetGameState();
  };

  const checkIfHighScore = () => {
    if (!userHistory.length) {
      return true;
    }
    return userHistory.some(({ name, score }) => userScore > score);
  };

  const resetGameState = () => {
    dispatch(
      setUserHistory(userHistory.concat({ name: userName, score: userScore }))
    );
    setIsGameEnded(false);
    setTimer(null);
    setWord("");
    setInputWord("");
    setUserScore(0);
    setTimeout(() => calculateAndDifficultyFactor(), 0);
  };

  useEffect(() => {
    difficultyFactor && calculateAndSetWord();
    if (difficultyFactor === 1.5) {
      //TODO promoted to medium
    } else if (difficultyFactor === 2) {
      //TODO promoted to hard
    } else if (difficultyFactor === 2.5) {
      alert("Congrats, you have completed the challenge!!!");
    }
  }, [difficultyFactor]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    calculateAndDifficultyFactor();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const timerEvent = setInterval((_) => {
      if (timer === 0) {
        setIsGameEnded(true);
      } else if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timerEvent);
    };
  }, [timer]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <GameScreenInfoWrapperStyled>
        <GameScreenPlayerInfoWrapper>
          <PlayerInfo name={userName} level={difficultyLevel} />
        </GameScreenPlayerInfoWrapper>

        <GameScreenScoreWrapperStyled>
          <GameScore score={userScore} isGameEnded={isGameEnded} />
        </GameScreenScoreWrapperStyled>
      </GameScreenInfoWrapperStyled>
      <GameScreenDashboardStyled isGameEnded={isGameEnded}>
        {!isGameEnded && (
          <GameScreenScoreBoardStyled>
            <ScoreBoard history={userHistory} />
          </GameScreenScoreBoardStyled>
        )}
        {isGameEnded ? (
          <GameHighlights
            gameNo={userHistory.length + 1}
            score={userScore}
            isNewHighScore={checkIfHighScore}
            onPlayAgain={onPlayAgain}
          />
        ) : (
          <GameScreenMainContentWrapperStyled>
            {timer && <Timer time={countDownCssTimer} />}
            <GameScreenWordMatchStyled>
              <RenderWords word={word} inputWord={inputWord} />
            </GameScreenWordMatchStyled>
            <GameScreenInputStyled
              autoFocus
              onChange={handleWordInputChange}
              value={inputWord}
            />
          </GameScreenMainContentWrapperStyled>
        )}
      </GameScreenDashboardStyled>
      {isGameEnded ? (
        <GameScreenQuitStyled onClick={onStopGame}>Quit</GameScreenQuitStyled>
      ) : (
        <GameScreenStopGameStyled onClick={onStopGame} tabIndex={0}>
          <span className="close-icon">x</span> STOP GAME
        </GameScreenStopGameStyled>
      )}
    </>
  );
};
export default GameScreen;
