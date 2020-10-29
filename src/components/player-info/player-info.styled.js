import styled, { css } from "styled-components";

export const PlayerInfoWraperStyled = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${(props) =>
    props.isMarginBottomRequired &&
    css`
      margin-bottom: 10px;
    `}
`;

export const PlayerInfoImageStyled = styled.img`
  margin-right: 5px;
`;
