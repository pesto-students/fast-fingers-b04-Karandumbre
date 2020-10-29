import styled from "styled-components";

import { isMobile } from "./../../contants/devices";

export const HomeScreenWrapperStyled = styled.div`
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HomeScreenHeaderContentWrapperStyled = styled.div`
  font-size: 81px;
  color: #ff5155;
  font-family: LaserCorpsGradient;
`;

export const HomeScreenSubHeaderContentWrapperStyled = styled.div`
  font-family: Gotham;
  font-size: 26px;
  font-weight: 500;
  color: #ff5155;
`;

export const HomeScreenInputWrapperStyled = styled.div`
  width: 400px;
  height: 50px;
  padding: 10px;
  margin-top: 25px;
  margin-bottom: 20px;
  @media only screen and ${isMobile} {
    width: initial;
  }
`;

export const HomeScreenInputStyled = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-family: Breamcatcher;
  font-size: 30px;
  color: #032228;
  opacity: 0.59;
  border-radius: 15px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.8);
  padding-left: 15px;
`;

export const HomeScreenStartGameWrapperStyled = styled.div`
  color: #ff5155;
  font-size: 25px;
  cursor: pointer;
  margin-top: 40px;
  display: flex;
  align-items: center;
  :focus {
    border: none !important;
    outline: none !important;
  }

  :before {
    content: "";
    width: 0px;
    height: 0px;
    border: 12px solid #ff5155;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 2px;
  }
`;

export const HomeScreenSelectStyled = styled.select`
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 250px;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  background-color: #fff;
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 0.7em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 100%;
`;
