import React, { useState } from "react";
import styled from "styled-components";

interface StyledButtonProps {
  isSelected: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "pink" : "")};

  @media screen and (max-width: 600px) {
    border-radius: 0;
    /*=======max-width:600px========*/
  }
`;

const OrangeButton = styled(StyledButton)`
  background-color: orange;

  :hover {
    color: red;
    opacity: 0.7;
  }

  span {
    font-size: 2em;
  }
`;

const Example3 = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </StyledButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}>
        <span>ボタン</span>
      </OrangeButton>
      <button onClick={clickHandler}>ボタン</button>
      <div>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example3;
