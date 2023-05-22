import React, { useState } from "react";
import styled from "styled-components";
import landingPageImage from "./landingpageImage.jpg";
import LoginSignUpComponent from "./LoginSignUpComponent/LoginSignUpComponent";
import PopUp from "../PopUp/PopUp";
import authService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  align-content: center;
  background-image: url(${landingPageImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (orientation: portrait) {
    flex-direction: column;
    height: fit-content;
    text-align: center;
  }
`;

const Left = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (orientation: portrait) {
    width: 100%;
    order: 2;
  }
`;

const Right = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
  padding: 75px;

  @media (orientation: portrait) {
    margin-top: 10vh;
    order: 1;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: clamp(60px, 6vw, 100px);
  font-family: "Poppins", sans-serif;
  letter-spacing: 5px;
  color: ${(props) => props.theme.colors.maintext};
  text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const LandingPage = () => {
  const [visiblePopup, setVisiblePopUp] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const navigate = useNavigate();
  const togglePopup = () => {
    setVisiblePopUp((prev) => !prev);
  };

  const SignInHandler = async (values) => {
    let result = await authService.signIn(values.email, values.password);

    if (result.success) {
      navigate("/home");
    }

    setPopupContent(
      <>
        <h1>{result.success ? "Success" : "Error"}</h1>
        <p>{result.message}</p>
      </>
    );
    togglePopup();
  };

  const SignUpHandler = async (values) => {
    let result = await authService.signUp(
      values.username,
      values.email,
      values.password
    );
    setPopupContent(
      <>
        <h1>{result.success ? "Success" : "Error"}</h1>
        <p>{result.message}</p>
      </>
    );
    togglePopup();
  };

  return (
    <>
      <PopUp visible={visiblePopup} toggle={togglePopup}>
        {popupContent}
      </PopUp>
      <Container>
        <Left>
          <LoginSignUpComponent
            signinHandler={SignInHandler}
            signupHandler={SignUpHandler}
          />
        </Left>
        <Right>
          <Title>Welcome to Seven Portal</Title>
        </Right>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
