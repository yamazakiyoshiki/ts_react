import React from "react";
import styled from "styled-components";

interface ThirdButtonProps {
  dark?: string;
}

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background-color: pink;
`;

const SecondButton = styled(FirstButton)`
  background-color: red;
  color: white;
`;

const ThirdButton = styled(SecondButton)<ThirdButtonProps>`
  background-color: ${({ dark }) => (dark ? "black" : "green")};
`;

const Practice1 = () => {
  return (
    <div>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン1</SecondButton>
      <ThirdButton>ボタン3</ThirdButton>
      <ThirdButton dark="dark">ボタン3</ThirdButton>
    </div>
  );
};

export default Practice1;
