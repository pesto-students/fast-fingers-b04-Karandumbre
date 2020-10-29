import React from "react";

import {
  RenderWordMatchStyled,
  RenderWordNotMatchStyled,
} from "./render-words.styled";

const RenderWords = React.memo(({ word, inputWord }) => {
  return word.split("").map((char, i) => {
    if (char === inputWord[i]) {
      return <RenderWordMatchStyled key={i}>{char}</RenderWordMatchStyled>;
    } else if (inputWord[i]) {
      return (
        <RenderWordNotMatchStyled key={i}>{char}</RenderWordNotMatchStyled>
      );
    } else {
      return <span key={i}>{char}</span>;
    }
  });
});
export default RenderWords;
