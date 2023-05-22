import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const Box = styled.div`
  position: relative;
  width: 60%;
  min-height: 300px;
  background-color: white;
  overflow: auto;
  padding: 4px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin-top: 10px;
  /* &:active {
    transform: scale(0.95);
  } */
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.15);
    transition: transform 0.1s ease-in-out;
  }
`;

const PopUp = (props) => {
  var render = props.visible;
  return (
    <>
      {render && (
        <Overlay>
          <Box>
            {props.children}
            <CloseButton onClick={props.toggle}>Close</CloseButton>
          </Box>
        </Overlay>
      )}
    </>
  );
};

export default PopUp;
