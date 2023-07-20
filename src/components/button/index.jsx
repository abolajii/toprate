import React from "react";
import styled from "styled-components";

const Container = styled.button`
  margin-top: 10px;
  color: white;
  background: #9c0e4e;
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 10px;

  ${({ secondary }) => {
    return (
      secondary &&
      `
    background: #333333;
    `
    );
  }}
`;

const Button = ({ secondary, title, onClick }) => {
  return (
    <Container onClick={onClick} secondary={secondary}>
      {title ? title : "Continue"}
    </Container>
  );
};

export default Button;
