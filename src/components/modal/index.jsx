import React from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
`;

const Modal = () => {
  return (
    <Container className="flex flex-center">
      <ScaleLoader color="#9c0e4e" />
    </Container>
  );
};

export default Modal;
