// vendor
import React from "react";
import { useSelector } from "react-redux";

// constants
import { screenInfo } from "../../contants/enums";

// components
import GameScreen from "../game-screen/game-screen";
import HomeScreen from "../home-screen/home-screen";

// styles
import { LayoutWrapperStyled } from "./layout.styled";

const Layout = ({ words }) => {
  const currentUserScreen = useSelector(
    (state) => state.currentUserScreen.value
  );
  const renderContent = () => {
    switch (currentUserScreen) {
      case screenInfo.GAME:
        return <GameScreen words={words} />;
      default:
        return <HomeScreen />;
    }
  };
  return <LayoutWrapperStyled>{renderContent()}</LayoutWrapperStyled>;
};

export default Layout;
