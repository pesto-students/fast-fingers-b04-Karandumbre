import styled, { css } from "styled-components";

export const GameScreenInfoWrapperStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GameScreenPlayerInfoWrapper = styled.div`
  font-size: 30px;
  color: #ff5155;
`;

export const GameScreenQuitStyled = styled.div`
  margin-top: auto;
  margin-left: 30px;
  color: #ff5155;
  cursor: pointer;
`;

export const GameScreenScoreWrapperStyled = styled.div`
  color: #ff5155;
  font-family: LaserCorpsGradient;
  font-size: 56px;
`;

export const GameScreenScoreBoardStyled = styled.div`
  width: 25%;
  min-height: 25vh;
  border: 2px solid #ff5155;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  margin-top: 30px;
`;

export const GameScreenStopGameStyled = styled.div`
  margin-left: 30px;
  color: #ff5155;
  margin-top: 45px;
  cursor: pointer;
  .close-icon {
    font-weight: 500;
    font-size: 22px;
  }
`;

export const GameScreenInputStyled = styled.input`
  height: 50px;
  width: 30%;
  margin-top: 10px;
  text-align: center;
  font-family: Breamcatcher;
  font-size: 35px;
  color: #032228;
  border-radius: 15px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.8);
  border: none;
  outline: none;
  opacity: 0.59;
`;

export const GameScreenDashboardStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  ${(props) =>
    props.isGameEnded &&
    css`
      justify-content: center;
    `}
`;

export const GameScreenMainContentWrapperStyled = styled.div`
  width: 75%;
  justify-content: center;
  text-align: center;
  margin: auto;
  > div {
    width: auto !important;
  }
`;

export const GameScreenTimerStyled = styled.div`
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  font-family: Gotham;
  font-size: 92px;
  font-weight: 500;
  color: white;
`;

export const GameScreenWordMatchStyled = styled.div`
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  font-family: Gotham;
  font-size: 92px;
  font-weight: 500;
  color: white;
`;
