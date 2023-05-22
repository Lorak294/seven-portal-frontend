import React from "react";
import styled from "styled-components";

const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem;
  padding: 3rem;
  color: ${(props) => props.theme.colors.maintext};
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: clamp(40px, 6vw, 50px);
  font-family: "Poppins", sans-serif;
  letter-spacing: 5px;
  color: ${(props) => props.theme.colors.maintext};
  text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  text-align: left;
  width: 100%;
`;

const Text = styled.p`
  text-align: justify;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 15px 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin-top: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  /* &:active {
    transform: scale(0.95);
  } */
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.15);
    //color: ${(props) => props.theme.colors.primary};
    transition: transform 0.1s ease-in-out;
    //box-shadow: inset 0 -100px 0 0 ${(props) => props.theme.colors.maintext};
  }
`;

const Slide = (props) => {
  return (
    <SlideWrapper>
      <SlideContainer>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Button>{props.buttonText}</Button>
      </SlideContainer>
    </SlideWrapper>
  );
};

export default Slide;
